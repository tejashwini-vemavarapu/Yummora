import React from 'react';
import { Recipe } from '../../types';
import { Clock, Users, Download, Heart } from 'lucide-react';
import Button from '../ui/Button';
import { generateRecipePDF } from '../../services/pdfService';
import { useRecipes } from '../../context/RecipeContext';

interface RecipeCardProps {
  recipe: Recipe;
  showFullDetails?: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  showFullDetails = false
}) => {
  const { saveRecipe } = useRecipes();
  const recipeCardRef = React.useRef<HTMLDivElement>(null);
  
  const handleDownload = async () => {
    if (!recipeCardRef.current) return;
    try {
      await generateRecipePDF(recipe, `recipe-${recipe.id}`);
    } catch (error) {
      console.error('Failed to download recipe:', error);
      alert('Failed to download recipe. Please try again.');
    }
  };
  
  const handleSave = () => {
    saveRecipe(recipe);
  };
  
  if (!showFullDetails) {
    // Compact card view
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <img 
            src={recipe.imageUrl} 
            alt={recipe.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-white font-bold text-xl">{recipe.title}</h3>
            <div className="flex items-center space-x-4 mt-2">
              <span className="text-white flex items-center text-sm">
                <Clock size={16} className="mr-1" /> {recipe.prepTime + recipe.cookTime} min
              </span>
              <span className="text-white flex items-center text-sm">
                <Users size={16} className="mr-1" /> {recipe.servings}
              </span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{recipe.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {recipe.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  // Detailed recipe view
  return (
    <div 
      ref={recipeCardRef} 
      id={`recipe-${recipe.id}`} 
      className="bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative h-72 md:h-96">
        <img 
          src={recipe.imageUrl} 
          alt={recipe.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h2 className="text-white font-bold text-3xl">{recipe.title}</h2>
          <p className="text-white/90 mt-2 max-w-2xl">{recipe.description}</p>
          <div className="flex items-center space-x-6 mt-4">
            <span className="text-white flex items-center">
              <Clock size={18} className="mr-2" /> {recipe.prepTime + recipe.cookTime} min
            </span>
            <span className="text-white flex items-center">
              <Users size={18} className="mr-2" /> {recipe.servings} servings
            </span>
            <span className="text-white/90">
              {recipe.calories} calories per serving
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {recipe.tags.map(tag => (
            <span key={tag} className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Ingredients</h3>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700 flex items-baseline">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Instructions</h3>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="text-gray-700">
                  <div className="flex">
                    <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span>{instruction}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        
        <div className="flex space-x-4 mt-8">
          <Button onClick={handleSave} variant="outline">
            <Heart size={18} className="mr-2" /> Save Recipe
          </Button>
          <Button onClick={handleDownload}>
            <Download size={18} className="mr-2" /> Download Recipe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;