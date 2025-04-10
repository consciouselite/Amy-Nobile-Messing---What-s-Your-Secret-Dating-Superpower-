import { motion } from 'framer-motion';

interface GenderSelectProps {
  value: 'male' | 'female' | null;
  onChange: (gender: 'male' | 'female') => void;
  onNext: () => void;
}

export const GenderSelect: React.FC<GenderSelectProps> = ({ value, onChange, onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-primary-800 font-heading mb-4 sm:mb-6">Please select your gender</h2>
      <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-2xl mx-auto">
        <button
          onClick={() => {
            onChange('male');
            onNext();
          }}
          className={`gender-option bg-secondary-100 hover:bg-primary-100 transition-colors rounded-xl border ${value === 'male' ? 'border-accent-500 shadow-md' : 'border-secondary-300'} overflow-hidden`}
        >
          <div className="aspect-square w-full relative">
            <img
              src="https://images.pexels.com/photos/27897903/pexels-photo-27897903.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Male"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-base sm:text-xl text-secondary-800 font-medium block py-3">👨 Male</span>
        </button>
        <button
          onClick={() => {
            onChange('female');
            onNext();
          }}
          className={`gender-option bg-secondary-100 hover:bg-primary-100 transition-colors rounded-xl border ${value === 'female' ? 'border-accent-500 shadow-md' : 'border-secondary-300'} overflow-hidden`}
        >
          <div className="aspect-square w-full relative">
            <img
              src="https://images.pexels.com/photos/3021538/pexels-photo-3021538.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Female"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-base sm:text-xl text-secondary-800 font-medium block py-3">👩 Female</span>
        </button>
      </div>
    </motion.div>
  );
};