import React from 'react';
import RecipeGenerator from '../components/cooking/RecipeGenerator';
import { useRecipes } from '../context/RecipeContext';
import RecipeCard from '../components/cooking/RecipeCard';
import { Link } from 'react-router-dom';

const CookingPage: React.FC = () => {
  const { recipes } = useRecipes();
  
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Let's Cook Something Amazing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate a recipe based on your mood and ingredients you have at home.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <RecipeGenerator />
        </div>
        
        {/* Popular Recipe Suggestions */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Need Inspiration? Try These Popular Recipes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recipes.slice(0, 3).map(recipe => (
              <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
                <RecipeCard recipe={recipe} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookingPage;