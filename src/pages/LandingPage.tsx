import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ChefHat, Clock, Sparkles, Utensils, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';

const LandingPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Cooking background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
                Delicious Meals Based on Your Mood & Ingredients
              </h1>
              <p className="text-xl text-white/90 mb-8 animate-fade-in-delay-1">
                Yummora helps busy people create amazing meals with what they already have at home, tailored to how they feel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
                <Link to={isAuthenticated ? "/cook" : "/signup"}>
                  <Button size="lg">
                    {isAuthenticated ? "Start Cooking" : "Sign Up Free"}
                    <ChevronRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/home">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How Yummora Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform makes cooking simple, personalized, and enjoyable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-orange-50 rounded-xl p-8 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="text-orange-500" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Mood-Based Recipes</h3>
              <p className="text-gray-600">
                Tell us how you're feeling, and we'll suggest recipes that match your mood.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-green-50 rounded-xl p-8 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Use What You Have</h3>
              <p className="text-gray-600">
                Enter the ingredients you already have, and we'll create delicious recipes.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-blue-500" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quick & Easy</h3>
              <p className="text-gray-600">
                Save time with recipes designed for busy people who still want to eat well.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to={isAuthenticated ? "/cook" : "/signup"}>
              <Button size="lg">
                Try It Now
                <ChevronRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of busy people who love cooking with Yummora.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold">
                  JS
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Jessica S.</h4>
                  <p className="text-gray-500 text-sm">Working Professional</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Yummora has changed how I think about cooking. I used to order takeout after work, but now I can make delicious meals with whatever I have in my fridge!"
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                  MT
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Michael T.</h4>
                  <p className="text-gray-500 text-sm">Busy Parent</p>
                </div>
              </div>
              <p className="text-gray-700">
                "As a parent with two kids, I need quick meal ideas. Yummora suggests recipes based on my family's mood and what's in my pantry. It's been a game changer!"
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-bold">
                  AL
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Aisha L.</h4>
                  <p className="text-gray-500 text-sm">Graduate Student</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I'm on a tight budget and don't have much time between classes. Yummora helps me make the most of my limited ingredients and still eat healthy, delicious meals."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <ChefHat size={36} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Cooking Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Yummora today and discover delicious recipes tailored to your mood and pantry.
          </p>
          <Link to={isAuthenticated ? "/cook" : "/signup"}>
            <Button size="lg" variant="secondary">
              {isAuthenticated ? "Start Cooking Now" : "Sign Up Free"}
              <ChevronRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;