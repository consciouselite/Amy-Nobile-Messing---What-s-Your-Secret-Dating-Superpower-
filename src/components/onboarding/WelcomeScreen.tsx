import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { quizTitle, quizSubtitle, typeQuestions } from '../../data/typeQuizData';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  // Strip the [QUIZ] suffix from the title if present
  const displayTitle = quizTitle.replace('[QUIZ]', '').trim();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center max-w-lg mx-auto"
    >      
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-primary-800 mb-4 sm:mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {displayTitle}
      </motion.h1>
      
      <motion.p
        className="text-secondary-700 text-base sm:text-lg mb-8 sm:mb-10 max-w-md mx-auto px-2 sm:px-0 font-body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {quizSubtitle}
      </motion.p>
      
      <motion.div
        className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 bg-primary-100 py-5 px-4 rounded-xl border border-primary-200 max-w-sm mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center justify-start gap-3 text-primary-800">
          <div className="w-3 h-3 rounded-full bg-accent-500 flex-shrink-0"></div>
          <span className="text-sm sm:text-base font-body">{typeQuestions.length} simple questions</span>
        </div>
        <div className="flex items-center justify-start gap-3 text-primary-800">
          <div className="w-3 h-3 rounded-full bg-accent-500 flex-shrink-0"></div>
          <span className="text-sm sm:text-base font-body">Takes only 3 minutes</span>
        </div>
        <div className="flex items-center justify-start gap-3 text-primary-800">
          <div className="w-3 h-3 rounded-full bg-accent-500 flex-shrink-0"></div>
          <span className="text-sm sm:text-base font-body">Get instant results</span>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 sm:mt-8"
      >
        <button
          onClick={onStart}
          className="primary-button flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 mx-auto text-base sm:text-lg bg-gradient-hero shadow-md hover:shadow-lg rounded-lg text-white font-semibold transform hover:-translate-y-1 transition"
        >
          <span>Get Started</span>
          <ArrowRight size={18} className="inline-block" />
        </button>
      </motion.div>
      
      <motion.p
        className="mt-8 sm:mt-10 text-xs sm:text-sm text-secondary-600 italic font-body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1 }}
      >
        Join thousands who have discovered their dating superpower with Amy Nobile Messing
      </motion.p>
    </motion.div>
  );
}; 