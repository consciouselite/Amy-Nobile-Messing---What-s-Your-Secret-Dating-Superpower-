import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { QuizProgress } from './components/QuizProgress';
import { TypeQuizQuestion } from './components/TypeQuizQuestion';
import { LeadForm } from './components/LeadForm';
import { TypeQuizResult } from './components/results/TypeQuizResult';
import { NameInput } from './components/onboarding/NameInput';
import { GenderSelect } from './components/onboarding/GenderSelect';
import { AgeSelect } from './components/onboarding/AgeSelect';
import { WelcomeScreen } from './components/onboarding/WelcomeScreen';
import { typeQuestions, quizTitle, quizSubtitle } from './data/typeQuizData';
import { useTypeQuiz } from './hooks/useTypeQuiz';
import './styles/index.css';
import { UserData } from './types';

function App() {
  const {
    state,
    userData,
    result,
    typeCounts,
    isSubmitting,
    error,
    handleAnswer,
    handleFormSubmit,
    setUserData,
    updateOnboarding,
    nextStep,
    resetQuiz
  } = useTypeQuiz();

  const [showRetakeMessage, setShowRetakeMessage] = useState(false);

  const handleFormSubmitWithFeedback = async (formData: Partial<UserData>) => {
    try {
      await handleFormSubmit(formData);
    } catch (err) {
      if (state.step === 'form') {
        nextStep();
      }
    }
  };

  const handleFormChange = (field: keyof UserData, value: string) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  const handleRetakeAttempt = () => {
    resetQuiz();
    setShowRetakeMessage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const profileImageUrl = "https://nrojbwxcqochzwhmmkql.supabase.co/storage/v1/object/sign/coaches-profile-images/Amy%20Nobile%20Messing%20PP.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb2FjaGVzLXByb2ZpbGUtaW1hZ2VzL0FteSBOb2JpbGUgTWVzc2luZyBQUC5wbmciLCJpYXQiOjE3NDM1MTU3MzgsImV4cCI6MTc3NTA1MTczOH0.PwNPgngK9J-16-Ab1v7C5_6aSSZrYe2eyJVlz8s-vEE";

  return (
    <div className="min-h-screen bg-secondary-100 py-6 px-4">
      
      <div className="quiz-container max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 border border-primary-200">
        <div className="flex justify-center items-center mb-8">
          <div className="coach-profile" style={{ width: '110px', height: '110px' }}>
            <img
              src={profileImageUrl}
              alt="Amy Nobile Messing"
            />
            <div className="absolute -bottom-2 -right-2 bg-accent-500 text-white text-xs px-2 py-1 rounded-full shadow-sm">
              Dating Coach
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {state.step === 'welcome' && (
            <WelcomeScreen key="welcome" onStart={nextStep} />
          )}
          
          {state.step === 'form' && (
            <h2 key="form-title" className="text-2xl font-bold text-primary-700 mb-4 font-heading text-center">Where should we send you your results?</h2>
          )}
          
          {state.step !== 'result' && state.step !== 'questions' && state.step !== 'gender' && state.step !== 'age' && state.step !== 'welcome' && state.step !== 'name' && state.step !== 'form' && (
            <h1 key="quiz-title" className="quiz-title text-3xl md:text-4xl font-bold text-primary-800 text-center font-heading">{quizTitle}</h1>
          )}
          
          {state.step !== 'result' && state.step !== 'questions' && state.step !== 'form' && state.step !== 'gender' && state.step !== 'age' && state.step !== 'welcome' && state.step !== 'name' && (
            <p key="quiz-subtitle" className="quiz-subtitle text-center text-secondary-700 mt-3 max-w-xl mx-auto">
              {quizSubtitle}
            </p>
          )}

          {state.step === 'name' && (
            <NameInput
              key="name-input"
              value={state.onboardingData.firstName}
              onChange={(name) => updateOnboarding({ firstName: name })}
              onNext={nextStep}
            />
          )}

          {state.step === 'gender' && (
            <GenderSelect
              key="gender-select"
              value={state.onboardingData.gender}
              onChange={(gender) => updateOnboarding({ gender })}
              onNext={nextStep}
            />
          )}

          {state.step === 'age' && (
            <AgeSelect
              key="age-select"
              value={state.onboardingData.ageGroup}
              gender={state.onboardingData.gender}
              onChange={(ageGroup) => updateOnboarding({ ageGroup })}
              onNext={nextStep}
            />
          )}

          {state.step === 'questions' && (
            <div key="questions-container">
              <QuizProgress
                currentQuestion={state.currentQuestion + 1}
                totalQuestions={typeQuestions.length}
              />
              {(() => {
                const currentQuestionText = typeQuestions[state.currentQuestion].text;
                const firstNameFromState = state.onboardingData.firstName;
                console.log(`Rendering Question ${state.currentQuestion + 1}:`);
                console.log(`  Original Text: ${currentQuestionText}`);
                console.log(`  First Name from State: '${firstNameFromState}'`);
                const modifiedText = currentQuestionText.replace(
                  '[Name]',
                  firstNameFromState || ''
                );
                console.log(`  Modified Text: ${modifiedText}`);
                
                return (
                  <TypeQuizQuestion
                    key={`question-${state.currentQuestion}`}
                    question={{
                      ...typeQuestions[state.currentQuestion],
                      text: modifiedText
                    }}
                    selectedAnswer={null}
                    onSelectAnswer={handleAnswer}
                  />
                );
              })()}
            </div>
          )}

          {state.step === 'form' && (
            <LeadForm
              key="lead-form"
              userData={userData}
              onSubmit={handleFormSubmitWithFeedback}
              onChange={handleFormChange}
              isSubmitting={isSubmitting}
              error={error}
            />
          )}

          {state.step === 'result' && result && (
            <>
              <TypeQuizResult
                key="quiz-result"
                result={result}
                userData={userData}
                typeCounts={typeCounts}
              />
              <div className="mt-8 text-center">
                <button
                  onClick={handleRetakeAttempt}
                  className="text-accent-600 underline hover:text-accent-700 transition font-medium"
                >
                  Retake Quiz
                </button>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
      
      <footer className="mt-8 text-center text-secondary-500 text-sm">
        © {new Date().getFullYear()} Amy Nobile Messing | Dating Coach
      </footer>
    </div>
  );
}

export default App;