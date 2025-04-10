import { motion } from 'framer-motion';

interface AgeSelectProps {
  value: string | null;
  gender: 'male' | 'female' | null;
  onChange: (age: '18-25' | '26-35' | '36-45' | '46+') => void;
  onNext: () => void;
}

const maleAgeGroups = [
  {
    range: '18-25',
    icon: '🌱',
    image: 'https://images.pexels.com/photos/6679377/pexels-photo-6679377.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '18-25 years'
  },
  {
    range: '26-35',
    icon: '🌿',
    image: 'https://images.pexels.com/photos/804009/pexels-photo-804009.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '26-35 years'
  },
  {
    range: '36-45',
    icon: '🌊',
    image: 'https://images.pexels.com/photos/3525908/pexels-photo-3525908.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '36-45 years'
  },
  {
    range: '46+',
    icon: '🌳',
    image: 'https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '46+ years'
  }
] as const;

const femaleAgeGroups = [
  {
    range: '18-25',
    icon: '🌱',
    image: 'https://images.pexels.com/photos/1447771/pexels-photo-1447771.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '18-25 years'
  },
  {
    range: '26-35',
    icon: '🌿',
    image: 'https://images.pexels.com/photos/325865/pexels-photo-325865.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '26-35 years'
  },
  {
    range: '36-45',
    icon: '🌊',
    image: 'https://images.pexels.com/photos/7752788/pexels-photo-7752788.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '36-45 years'
  },
  {
    range: '46+',
    icon: '🌳',
    image: 'https://images.pexels.com/photos/8417210/pexels-photo-8417210.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: '46+ years'
  }
] as const;

export const AgeSelect: React.FC<AgeSelectProps> = ({ value, gender, onChange, onNext }) => {
  // Log the gender for debugging
  console.log('Current gender passed as prop:', gender);
  
  // Choose appropriate age groups based on gender with strict equality check
  // Default to male age groups if gender is null
  const ageGroups = gender === 'female' 
    ? femaleAgeGroups 
    : maleAgeGroups;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-primary-800 font-heading mb-4 sm:mb-6">Which age group do you belong to?</h2>
      
      {gender === null && (
        <p className="text-sm text-amber-600 mb-4">
          Note: Please go back and select your gender for personalized options.
        </p>
      )}
      
      <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
        {ageGroups.map((group) => (
          <button
            key={group.range}
            onClick={() => {
              onChange(group.range);
              onNext();
            }}
            className={`age-option bg-secondary-100 hover:bg-primary-100 transition-colors rounded-xl border ${value === group.range ? 'border-accent-500 shadow-md' : 'border-secondary-300'} overflow-hidden`}
          >
            <div className="aspect-square w-full relative">
              <img
                src={group.image}
                alt={group.title}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm sm:text-lg text-secondary-800 font-medium block py-3">
              {group.icon} {group.title}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
};