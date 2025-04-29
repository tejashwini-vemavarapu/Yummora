import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Menu, X, ChefHat, User, History, LogOut, Heart } from 'lucide-react';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  const navbarClass = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}
    ${location.pathname === '/' && !isScrolled ? 'text-white' : 'text-gray-800'}
  `;
  
  const logoClass = `
    font-bold text-2xl flex items-center
    ${location.pathname === '/' && !isScrolled ? 'text-white' : 'text-orange-500'}
  `;
  
  return (
    <header className={navbarClass}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className={logoClass}>
            <ChefHat className="mr-2" size={28} />
            Yummora
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/home" 
              className={`px-4 py-2 rounded-md hover:bg-orange-50 transition-colors ${
                location.pathname === '/home' ? 'font-medium text-orange-500' : ''
              }`}
            >
              Home
            </Link>
            
            <Link 
              to="/cook" 
              className={`px-4 py-2 rounded-md hover:bg-orange-50 transition-colors ${
                location.pathname === '/cook' ? 'font-medium text-orange-500' : ''
              }`}
            >
              Cook
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link 
                  to="/saved" 
                  className={`px-4 py-2 rounded-md hover:bg-orange-50 transition-colors ${
                    location.pathname === '/saved' ? 'font-medium text-orange-500' : ''
                  }`}
                >
                  Saved Recipes
                </Link>
                
                <div className="relative group ml-2">
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-orange-50">
                    <User size={20} />
                    <span>{user?.name || 'Profile'}</span>
                  </button>
                  
                  <div className="absolute right-0 w-48 bg-white shadow-lg rounded-md overflow-hidden hidden group-hover:block mt-1">
                    <Link 
                      to="/profile" 
                      className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-orange-50"
                    >
                      <User size={18} className="mr-2" />
                      Profile
                    </Link>
                    <Link 
                      to="/history" 
                      className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-orange-50"
                    >
                      <History size={18} className="mr-2" />
                      History
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-orange-50"
                    >
                      <LogOut size={18} className="mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline">Log In</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/home" 
                className={`px-4 py-2 rounded-md hover:bg-orange-50 ${
                  location.pathname === '/home' ? 'bg-orange-50 text-orange-500 font-medium' : ''
                }`}
              >
                Home
              </Link>
              
              <Link 
                to="/cook" 
                className={`px-4 py-2 rounded-md hover:bg-orange-50 ${
                  location.pathname === '/cook' ? 'bg-orange-50 text-orange-500 font-medium' : ''
                }`}
              >
                Cook
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/saved" 
                    className={`px-4 py-2 rounded-md hover:bg-orange-50 flex items-center ${
                      location.pathname === '/saved' ? 'bg-orange-50 text-orange-500 font-medium' : ''
                    }`}
                  >
                    <Heart size={18} className="mr-2" />
                    Saved Recipes
                  </Link>
                  
                  <Link 
                    to="/profile" 
                    className={`px-4 py-2 rounded-md hover:bg-orange-50 flex items-center ${
                      location.pathname === '/profile' ? 'bg-orange-50 text-orange-500 font-medium' : ''
                    }`}
                  >
                    <User size={18} className="mr-2" />
                    Profile
                  </Link>
                  
                  <Link 
                    to="/history" 
                    className={`px-4 py-2 rounded-md hover:bg-orange-50 flex items-center ${
                      location.pathname === '/history' ? 'bg-orange-50 text-orange-500 font-medium' : ''
                    }`}
                  >
                    <History size={18} className="mr-2" />
                    History
                  </Link>
                  
                  <button 
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-md hover:bg-orange-50 flex items-center text-left"
                  >
                    <LogOut size={18} className="mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <div className="pt-2 flex flex-col space-y-3">
                  <Link to="/login">
                    <Button variant="outline" fullWidth>Log In</Button>
                  </Link>
                  <Link to="/signup">
                    <Button fullWidth>Sign Up</Button>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;