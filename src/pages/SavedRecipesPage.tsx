import React from 'react';
import { useRecipes } from '../context/RecipeContext';
import RecipeCard from '../components/cooking/RecipeCard';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const SavedRecipesPage: React.FC = () => {
  const { savedRecipes } = useRecipes();
  
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Your Saved Recipes</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            All your favorite recipes in one place.
          </p>
        </div>
        
        {savedRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {savedRecipes.map(recipe => (
              <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
                <RecipeCard recipe={recipe} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <BookOpen className="text-orange-500" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No saved recipes yet</h3>
            <p className="text-gray-600 mb-6">
              When you find recipes you love, save them here for quick access.
            </p>
            <Link to="/cook" className="text-orange-500 font-medium hover:underline">
              Discover Recipes
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedRecipesPage;