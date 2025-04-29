import React from 'react';
import { MOODS } from '../../constants';

interface MoodSelectorProps {
  selectedMood: string;
  onMoodChange: (mood: string) => void;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({
  selectedMood,
  onMoodChange
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-800">How are you feeling today?</h3>
      
      <div className="grid grid-cols-3 gap-3">
        {MOODS.map(mood => (
          <button
            key={mood}
            type="button"
            onClick={() => onMoodChange(mood)}
            className={`
              py-3 px-4 rounded-lg text-center transition-all 
              ${selectedMood === mood 
                ? 'bg-orange-500 text-white shadow-md transform scale-105' 
                : 'bg-white border border-gray-200 text-gray-700 hover:bg-orange-50'}
            `}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;