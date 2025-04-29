import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-orange-500 flex items-center">
              <ChefHat className="mr-2" size={28} />
              Yummora
            </Link>
            <p className="mt-4 text-gray-600">
              Delicious recipes tailored to your mood and ingredients, designed for busy people.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:info@yummora.com" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-orange-500">Home</Link></li>
                <li><Link to="/cook" className="text-gray-600 hover:text-orange-500">Cook</Link></li>
                <li><Link to="/saved" className="text-gray-600 hover:text-orange-500">Saved Recipes</Link></li>
                <li><Link to="/profile" className="text-gray-600 hover:text-orange-500">Profile</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-orange-500">Quick Meals</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-500">Healthy Options</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-500">Comfort Food</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-500">International Cuisine</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-orange-500">Our Story</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-500">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-500">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-500">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6">
          <p className="text-gray-500 text-center text-sm">
            &copy; {new Date().getFullYear()} Yummora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;