import { motion } from 'framer-motion';
import { useState } from 'react';

interface NameInputProps {
  value: string;
  onChange: (name: string) => void;
  onNext: () => void;
}

export const NameInput: React.FC<NameInputProps> = ({ value, onChange, onNext }) => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) {
      setError('Please enter your name to continue');
      return;
    }
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full max-w-md mx-auto"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-primary-800 font-heading mb-2 sm:mb-3">
        What's your first name?
      </h2>
      <p className="text-secondary-700 text-sm sm:text-base mb-6">
        We'll use this to personalize your quiz experience
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
              if (error) setError(null);
            }}
            placeholder="Your first name"
            className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-100 bg-white text-secondary-800 placeholder-secondary-400 text-lg"
            autoFocus
          />
          {error && <p className="text-error text-sm mt-1 text-left">{error}</p>}
        </div>
        
        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-hero text-white font-semibold rounded-lg shadow hover:shadow-md transition transform hover:-translate-y-0.5"
        >
          Continue
        </button>
      </form>
    </motion.div>
  );
};