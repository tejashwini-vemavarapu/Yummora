import React, { useState } from 'react';
import MoodSelector from './MoodSelector';
import IngredientSelector from './IngredientSelector';
import Button from '../ui/Button';
import { useRecipes } from '../../context/RecipeContext';
import { useNavigate } from 'react-router-dom';
import { ChefHat } from 'lucide-react';

const RecipeGenerator: React.FC = () => {
  const [mood, setMood] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');
  
  const { startNewSession, generateRecipe } = useRecipes();
  const navigate = useNavigate();
  
  const handleGenerateRecipe = async () => {
    // Validate inputs
    if (!mood) {
      setError('Please select your mood');
      return;
    }
    
    if (ingredients.length === 0) {
      setError('Please add at least one ingredient');
      return;
    }
    
    setError('');
    setIsGenerating(true);
    
    try {
      // Start a new cooking session
      startNewSession(mood, ingredients);
      
      // Generate a recipe
      const recipe = await generateRecipe(mood, ingredients);
      
      // Navigate to the recipe page
      navigate(`/recipe/${recipe.id}`);
    } catch (err) {
      setError('Failed to generate recipe. Please try again.');
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full text-orange-500 mb-4">
          <ChefHat size={32} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Let's Cook Something Delicious</h2>
        <p className="text-gray-600 mt-2">Tell us how you're feeling and what ingredients you have</p>
      </div>
      
      <MoodSelector 
        selectedMood={mood} 
        onMoodChange={setMood} 
      />
      
      <IngredientSelector 
        selectedIngredients={ingredients} 
        onIngredientsChange={setIngredients} 
      />
      
      {error && (
        <div className="mt-4 text-red-500 text-sm">{error}</div>
      )}
      
      <div className="mt-8">
        <Button 
          onClick={handleGenerateRecipe} 
          isLoading={isGenerating}
          fullWidth
          size="lg"
        >
          Generate My Recipe
        </Button>
      </div>
    </div>
  );
};

export default RecipeGenerator;