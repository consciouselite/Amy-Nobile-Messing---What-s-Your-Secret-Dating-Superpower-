import { useState, useEffect } from 'react';
import { QuizState, UserData, OnboardingData, QuizStep } from '../types';
import { datingTypes, typeQuestions } from '../data/typeQuizData';
import { quizService } from '../services/quiz.service';

export const useTypeQuiz = () => {
  const [state, setState] = useState<QuizState>({
    step: 'welcome',
    currentQuestion: 0,
    answers: [],
    onboardingData: {
      firstName: '',
      gender: null,
      ageGroup: null
    }
  });

  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: null,
    ageGroup: null
  });

  const [result, setResult] = useState<any>(null);
  const [typeCounts, setTypeCounts] = useState<Record<string, number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Effect to sync onboarding name to userData when form step is reached
  useEffect(() => {
    if (state.step === 'form' && state.onboardingData.firstName) {
      // Pre-populate userData.firstName for the LeadForm
      setUserData(prevUserData => ({
        ...prevUserData,
        // Only update if userData.firstName is currently empty to avoid overwriting user edits
        // or if it doesn't match the onboarding name (in case user went back)
        firstName: (!prevUserData.firstName || prevUserData.firstName !== state.onboardingData.firstName) 
                   ? state.onboardingData.firstName 
                   : prevUserData.firstName
      }));
    }
    // We only want this specific sync effect, dependencies are correct
  }, [state.step, state.onboardingData.firstName]);

  // On initial load, shuffle the order of options for each question
  useEffect(() => {
    // Create a copy to avoid mutating the original
    const shuffledQuestions = [...typeQuestions].map(question => {
      const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
      return {
        ...question,
        options: shuffledOptions
      };
    });
    
    // We don't actually update typeQuestions directly because it's imported as const
    // This is just to show the logic of how we would randomize the questions
    // In a real implementation, we'd have to modify how the questions are stored/accessed
  }, []);

  const handleAnswer = (type: string) => {
    const newAnswers = [...state.answers, type];
    setState((prev: QuizState) => ({
      ...prev,
      answers: newAnswers,
      currentQuestion: prev.currentQuestion + 1,
      step: prev.currentQuestion === 8 ? 'form' : 'questions' // We have 9 questions (0-8)
    }));
  };

  const calculateResult = () => {
    // Count frequency of each type in answers
    const counts: Record<string, number> = state.answers.reduce((acc: Record<string, number>, type: string) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Find the most frequent type
    let maxCount = 0;
    let dominantType = "";

    Object.entries(counts).forEach(([type, count]) => {
      if (count > maxCount) {
        maxCount = count;
        dominantType = type;
      }
    });

    // In case of a tie, choose the one that appeared first in the answers
    if (maxCount > 0) {
      const tiedTypes = Object.entries(counts).filter(([_, count]) => count === maxCount).map(([type]) => type);
      if (tiedTypes.length > 1) {
        // Find the first type among the tied types that appears in the answers
        for (const answer of state.answers) {
          if (tiedTypes.includes(answer)) {
            dominantType = answer;
            break;
          }
        }
      }
    }

    // Calculate percentage of dominance
    const totalQuestions = state.answers.length;
    const dominancePercentage = totalQuestions > 0 ? (maxCount / totalQuestions) * 100 : 0;

    // Map shortened type name to full type name
    const typeMap: Record<string, string> = {
      'Magnetic': 'The Magnetic Connector',
      'Strategic': 'The Strategic Planner',
      'Playful': 'The Playful Adventurer',
      'Authentic': 'The Authentic Explorer'
    };

    const fullTypeName = typeMap[dominantType] || dominantType;

    // Get the profile for the dominant type
    const profile = datingTypes.find(p => p.type === fullTypeName) || datingTypes[0];

    // Create type counts with full names for display
    const fullNameCounts: Record<string, number> = {};
    Object.entries(counts).forEach(([type, count]) => {
      const fullName = typeMap[type] || type;
      fullNameCounts[fullName] = count;
    });

    return { 
      profile, 
      dominantType: fullTypeName, 
      dominancePercentage, 
      typeCounts: fullNameCounts 
    };
  };

  const updateOnboarding = (data: Partial<OnboardingData>) => {
    setState((prev: QuizState) => ({
      ...prev,
      onboardingData: { ...prev.onboardingData, ...data }
    }));
  };

  const nextStep = () => {
    setState((prev: QuizState) => {
      const steps: QuizStep[] = ['welcome', 'name', 'gender', 'age', 'questions', 'form', 'result'];
      const currentIndex = steps.indexOf(prev.step);
      const nextStep = steps[currentIndex + 1];
      return { ...prev, step: nextStep };
    });
  };

  const handleFormSubmit = async (formData: Partial<UserData>) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const fullUserData = {
        ...userData,
        ...state.onboardingData,
        ...formData,
        ageGroup: formData.ageGroup || userData.ageGroup || state.onboardingData.ageGroup || null
      };

      const { profile, typeCounts: counts, dominantType } = calculateResult();
      setResult(profile);
      setTypeCounts(counts);

      try {
        // Try to save to server but don't block moving to results if it fails
        await quizService.saveQuizResults(
          fullUserData,
          0, // No score in type framework
          dominantType,
          state.answers.map(_ => 0) // Convert type answers to scores (all 0)
        );
      } catch (serverError) {
        console.error('Error saving quiz results to server:', serverError);
        setError('Failed to save quiz results, but your results are still available.');
        // Continue to results page despite the error
      }

      // Always move to results page, even if saving to server fails
      setState((prev: QuizState) => ({ ...prev, step: 'result' }));
    } catch (err) {
      console.error('Error calculating quiz results:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to reset the quiz state
  const resetQuiz = () => {
    setState({
      step: 'welcome', // Go back to the welcome screen
      currentQuestion: 0,
      answers: [],
      onboardingData: {
        firstName: '', // Clear onboarding data
        gender: null,
        ageGroup: null
      }
    });
    setUserData({
      firstName: '', // Clear user data
      lastName: '',
      email: '',
      phone: '',
      gender: null,
      ageGroup: null
    });
    setResult(null); // Clear previous result
    setTypeCounts({}); // Clear type counts
    setError(null); // Clear any errors
    setIsSubmitting(false); // Reset submitting flag
  };

  return {
    state,
    userData,
    result,
    typeCounts,
    isSubmitting,
    error,
    handleAnswer,
    handleFormSubmit,
    calculateResult,
    setUserData,
    updateOnboarding,
    nextStep,
    resetQuiz // Export the new reset function
  };
}; 