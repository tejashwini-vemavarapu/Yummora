import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';
import RecipeCard from '../components/cooking/RecipeCard';
import Button from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';

const RecipePage: React.FC = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const { recipes } = useRecipes();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (recipeId) {
      const foundRecipe = recipes.find(r => r.id === recipeId);
      if (foundRecipe) {
        setRecipe(foundRecipe);
      } else {
        // Recipe not found, redirect to cooking page
        navigate('/cook');
      }
    }
  }, [recipeId, recipes, navigate]);
  
  if (!recipe) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading recipe...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <button 
          onClick={() => navigate(-1)} 
          className="mb-6 flex items-center text-gray-600 hover:text-orange-500 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back
        </button>
        
        <RecipeCard recipe={recipe} showFullDetails />
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Want to try something else?</h3>
          <Button onClick={() => navigate('/cook')} size="lg">
            Generate Another Recipe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;