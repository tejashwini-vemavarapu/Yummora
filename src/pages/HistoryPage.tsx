import React from 'react';
import { useRecipes } from '../context/RecipeContext';
import { Link } from 'react-router-dom';
import { History, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';

const HistoryPage: React.FC = () => {
  const { sessionHistory, recipes } = useRecipes();
  
  // Sort sessions by date (newest first)
  const sortedSessions = [...sessionHistory].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
  
  // Function to find recipe by ID
  const findRecipe = (recipeId?: string) => {
    if (!recipeId) return null;
    return recipes.find(recipe => recipe.id === recipeId);
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Your Cooking History</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See all your previous cooking sessions and recipes.
          </p>
        </div>
        
        {sortedSessions.length > 0 ? (
          <div className="space-y-6 max-w-4xl mx-auto">
            {sortedSessions.map(session => {
              const recipe = findRecipe(session.recipeId);
              const sessionDate = new Date(session.timestamp);
              
              return (
                <div key={session.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-sm text-gray-500">
                          {sessionDate.toLocaleDateString()} at {sessionDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                        <h3 className="text-xl font-bold text-gray-800">
                          {recipe ? recipe.title : `Cooking Session: ${session.mood} Mood`}
                        </h3>
                      </div>
                      {recipe && (
                        <Link to={`/recipe/${recipe.id}`}>
                          <Button variant="outline" size="sm">
                            View Recipe
                            <ChevronRight size={16} className="ml-1" />
                          </Button>
                        </Link>
                      )}
                    </div>
                    
                    <div>
                      <p className="text-gray-700 mb-2">
                        <span className="font-medium">Mood:</span> {session.mood}
                      </p>
                      <div>
                        <span className="font-medium text-gray-700">Ingredients:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {session.ingredients.map((ingredient, idx) => (
                            <span 
                              key={idx} 
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                              {ingredient}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <History className="text-orange-500" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No cooking history yet</h3>
            <p className="text-gray-600 mb-6">
              Start cooking with Yummora to build your history.
            </p>
            <Link to="/cook">
              <Button>
                Start Cooking
                <ChevronRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;