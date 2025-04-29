import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';
import RecipeCard from '../components/cooking/RecipeCard';
import Button from '../components/ui/Button';
import { ChevronRight, Sparkles, BookOpen, Download } from 'lucide-react';

const HomePage: React.FC = () => {
  const { recipes } = useRecipes();
  
  // Get a subset of recipes to display
  const featuredRecipes = recipes.slice(0, 3);
  
  return (
    <div className="min-h-screen pt-20">
      {/* Welcome Banner */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Yummora</h1>
            <p className="text-xl mb-6">
              Discover delicious recipes tailored to your mood and ingredients you have at home.
            </p>
            <Link to="/cook">
              <Button variant="secondary" size="lg">
                Let's Cook!
                <ChevronRight size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How Yummora Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles size={24} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Tell Us Your Mood</h3>
              <p className="text-gray-600">
                Share how you're feeling, and we'll suggest recipes that match your mood.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={24} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. List Your Ingredients</h3>
              <p className="text-gray-600">
                Enter ingredients you have on hand, and we'll create recipes using what you already have.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download size={24} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Get Your Recipe</h3>
              <p className="text-gray-600">
                Receive a personalized recipe you can cook right away or download for later.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/cook">
              <Button size="lg">
                Start Cooking
                <ChevronRight size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Recipes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Featured Recipes</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Check out these delicious recipes that you can make in minutes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRecipes.map(recipe => (
              <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
                <RecipeCard recipe={recipe} />
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/cook">
              <Button variant="outline" size="lg">
                See More Recipes
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Benefits of Cooking with Yummora</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Save Time</h3>
                  <p className="text-gray-600">
                    No more searching for recipes or making trips to the grocery store.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Reduce Food Waste</h3>
                  <p className="text-gray-600">
                    Use ingredients you already have before they expire.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Eat Better</h3>
                  <p className="text-gray-600">
                    Homemade meals are typically healthier than takeout or processed foods.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Save Money</h3>
                  <p className="text-gray-600">
                    Cooking at home is more economical than dining out or ordering delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Cooking?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create a delicious meal based on your mood and ingredients.
          </p>
          <Link to="/cook">
            <Button variant="secondary" size="lg">
              Let's Cook!
              <ChevronRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;