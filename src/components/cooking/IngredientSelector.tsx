import React, { useState } from 'react';
import { COMMON_INGREDIENTS } from '../../constants';
import { PlusCircle, X } from 'lucide-react';

interface IngredientSelectorProps {
  selectedIngredients: string[];
  onIngredientsChange: (ingredients: string[]) => void;
}

const IngredientSelector: React.FC<IngredientSelectorProps> = ({
  selectedIngredients,
  onIngredientsChange
}) => {
  const [newIngredient, setNewIngredient] = useState('');
  
  const handleAddIngredient = () => {
    if (!newIngredient.trim()) return;
    
    // Check if ingredient already exists
    if (!selectedIngredients.includes(newIngredient)) {
      onIngredientsChange([...selectedIngredients, newIngredient]);
    }
    
    setNewIngredient('');
  };
  
  const handleRemoveIngredient = (ingredient: string) => {
    onIngredientsChange(selectedIngredients.filter(i => i !== ingredient));
  };
  
  const handleCommonIngredientClick = (ingredient: string) => {
    if (!selectedIngredients.includes(ingredient)) {
      onIngredientsChange([...selectedIngredients, ingredient]);
    }
  };
  
  return (
    <div className="space-y-4 mt-6">
      <h3 className="text-lg font-medium text-gray-800">What ingredients do you have?</h3>
      
      {/* Selected ingredients */}
      <div className="flex flex-wrap gap-2">
        {selectedIngredients.map(ingredient => (
          <div 
            key={ingredient}
            className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full flex items-center"
          >
            <span>{ingredient}</span>
            <button
              type="button"
              onClick={() => handleRemoveIngredient(ingredient)}
              className="ml-2 text-orange-500 hover:text-orange-700"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
      
      {/* Input for new ingredient */}
      <div className="flex gap-2">
        <input
          type="text"
          value={newIngredient}
          onChange={(e) => setNewIngredient(e.target.value)}
          placeholder="Add your own ingredient"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleAddIngredient();
            }
          }}
        />
        <button
          type="button"
          onClick={handleAddIngredient}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md flex items-center"
        >
          <PlusCircle size={20} className="mr-1" />
          Add
        </button>
      </div>
      
      {/* Common ingredients */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Common ingredients:</h4>
        <div className="flex flex-wrap gap-2">
          {COMMON_INGREDIENTS.map(ingredient => (
            <button
              key={ingredient}
              type="button"
              onClick={() => handleCommonIngredientClick(ingredient)}
              disabled={selectedIngredients.includes(ingredient)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedIngredients.includes(ingredient)
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700'
              }`}
            >
              {ingredient}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IngredientSelector;