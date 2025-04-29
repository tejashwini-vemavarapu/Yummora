import React, { createContext, useState, useContext, ReactNode } from 'react';
import { User, UserProfile, AuthContextType } from '../types';

// Create an initial context value
const initialAuthContext: AuthContextType = {
  user: null,
  isAuthenticated: false,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
  setUserProfile: () => {}
};

// Create the context
const AuthContext = createContext<AuthContextType>(initialAuthContext);

// Provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Mock login function - in a real app, this would call an API
  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data
    const userData: User = {
      id: '1',
      email,
      name: 'Demo User',
    };
    
    setUser(userData);
    // Save to localStorage for persistence
    localStorage.setItem('yummora-user', JSON.stringify(userData));
  };

  // Mock signup function
  const signup = async (email: string, password: string, name: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data
    const userData: User = {
      id: Date.now().toString(),
      email,
      name,
    };
    
    setUser(userData);
    // Save to localStorage for persistence
    localStorage.setItem('yummora-user', JSON.stringify(userData));
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('yummora-user');
  };

  // Set user profile data
  const setUserProfile = (profile: UserProfile) => {
    if (!user) return;
    
    const updatedUser = {
      ...user,
      ...profile
    };
    
    setUser(updatedUser);
    localStorage.setItem('yummora-user', JSON.stringify(updatedUser));
  };

  // Check for saved user on initial load
  React.useEffect(() => {
    const savedUser = localStorage.getItem('yummora-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Create the context value
  const value = {
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
    setUserProfile
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);