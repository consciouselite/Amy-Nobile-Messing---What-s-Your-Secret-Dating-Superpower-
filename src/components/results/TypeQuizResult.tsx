import React from 'react';
import { UserData } from '../../types';
import { PersonalityType } from '../../types/quizTypes';
import { Share2, MessageCircle, Send } from 'lucide-react';

interface TypeQuizResultProps {
  result: PersonalityType;
  userData: UserData;
  typeCounts: Record<string, number>;
}

export const TypeQuizResult: React.FC<TypeQuizResultProps> = ({
  result,
  userData,
  typeCounts
}) => {
  // Calculate percentages for visualization
  const totalAnswers = Object.values(typeCounts).reduce((sum, count) => sum + count, 0);
  const typePercentages = Object.entries(typeCounts).map(([type, count]) => ({
    type,
    percentage: Math.round((count / totalAnswers) * 100)
  }));

  // Get emoji based on type
  const getTypeEmoji = (type: string) => {
    if (type.includes('Magnetic')) return '🎯';
    if (type.includes('Strategic')) return '📋';
    if (type.includes('Playful')) return '🎭';
    if (type.includes('Authentic')) return '💭';
    return '❤️';
  };

  // Create personalized sharing messages
  const emoji = getTypeEmoji(result.type);
  const shareMessage = `${emoji} I just took Amy Nobile Messing's Dating Superpower quiz and discovered I'm a "${result.type}"! Curious about your dating superpower? Take this 3-minute quiz: `;
  const shareUrl = window.location.href;
  
  // Share functions
  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareMessage + shareUrl)}`, '_blank');
  };
  
  const shareOnMessenger = () => {
    window.open(`https://www.facebook.com/dialog/send?link=${encodeURIComponent(shareUrl)}&app_id=181374745748345&redirect_uri=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  return (
    <div className="quiz-result">
      <h1 className="result-title text-primary-800 font-display font-bold text-2xl sm:text-3xl md:text-4xl mb-6">
        {userData.firstName}, you are <span className="text-accent-600">The {result.type.split(' ').slice(1).join(' ')}</span>
      </h1>
      
      <div className="result-description bg-primary-100 p-6 rounded-xl shadow-sm border border-primary-200">
        <p className="text-secondary-800 font-body">{result.description}</p>
      </div>
      
      <div className="type-distribution my-8">
        <h3 className="text-lg font-semibold mb-4 text-primary-700 font-heading">Your Dating Superpower Breakdown:</h3>
        <div className="type-bars">
          {typePercentages.map(({ type, percentage }) => (
            <div key={type} className="type-bar-container mb-4">
              <div className="flex items-center mb-1">
                <span className="type-label font-medium text-secondary-800">{type}:</span>
                <span className="ml-2 text-accent-600 font-semibold">{percentage}%</span>
              </div>
              <div className="h-5 w-full bg-primary-100 rounded-full overflow-hidden border border-primary-200">
                <div 
                  className="h-full bg-gradient-hero rounded-full"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="type-details grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="strengths bg-primary-100 p-6 rounded-xl shadow-sm border border-primary-200">
          <h3 className="text-lg font-semibold mb-4 text-accent-600 font-heading">Your Dating Superpowers:</h3>
          <ul className="list-disc pl-5 space-y-3 text-secondary-800">
            {result.strengths.map((strength, index) => (
              <li key={index}>{strength}</li>
            ))}
          </ul>
        </div>

        <div className="challenges bg-secondary-100 p-6 rounded-xl shadow-sm border border-secondary-200">
          <h3 className="text-lg font-semibold mb-4 text-primary-700 font-heading">Your Growth Edge:</h3>
          <ul className="list-disc pl-5 space-y-3 text-secondary-800">
            {result.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="recommendations bg-accent-100 p-6 rounded-xl shadow-sm border border-accent-200 my-8">
        <h3 className="text-lg font-semibold mb-4 text-accent-700 font-heading">Personalized Dating Tips:</h3>
        <ul className="list-disc pl-5 space-y-3 text-secondary-800">
          {result.tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>

      <div className="cta-section text-center mt-10 bg-gradient-subtle p-8 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-3 text-primary-700 font-heading">🙂 Know someone who'd love to discover their dating superpower? 🙂</h3>
        <p className="mb-6 text-secondary-800">
          Who in your life would benefit from understanding their unique dating style? Share this quiz with them!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={shareOnWhatsApp}
            className="share-button flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-md"
          >
            <Share2 size={18} />
            <span>Share on WhatsApp</span>
          </button>
          
          <button 
            onClick={shareOnMessenger}
            className="share-button flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition shadow-md"
          >
            <MessageCircle size={18} />
            <span>Share on Messenger</span>
          </button>
        </div>
        
        <p className="mt-4 text-sm text-primary-600 italic font-body">
          "Sharing wisdom is one of the most powerful ways to deepen your own dating journey." - Amy Nobile Messing
        </p>
      </div>
    </div>
  );
}; 