import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Recipe, CookingSession, RecipeContextType } from '../types';
import { PREDEFINED_RECIPES } from '../constants';
import { useAuth } from './AuthContext';
import { generateRecipeWithGemini } from '../services/geminiService';

// Create an initial context value
const initialRecipeContext: RecipeContextType = {
  recipes: [],
  savedRecipes: [],
  sessionHistory: [],
  currentSession: null,
  generateRecipe: async () => ({} as Recipe),
  saveRecipe: () => {},
  startNewSession: () => {}
};

// Create the context
const RecipeContext = createContext<RecipeContextType>(initialRecipeContext);

// Provider component
export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [recipes, setRecipes] = useState<Recipe[]>(PREDEFINED_RECIPES);
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
  const [sessionHistory, setSessionHistory] = useState<CookingSession[]>([]);
  const [currentSession, setCurrentSession] = useState<CookingSession | null>(null);

  // Load saved recipes and session history from localStorage on initial load
  useEffect(() => {
    if (user) {
      const savedRecipesData = localStorage.getItem(`yummora-saved-recipes-${user.id}`);
      const sessionHistoryData = localStorage.getItem(`yummora-sessions-${user.id}`);
      
      if (savedRecipesData) {
        setSavedRecipes(JSON.parse(savedRecipesData));
      }
      
      if (sessionHistoryData) {
        setSessionHistory(JSON.parse(sessionHistoryData));
      }
    }
  }, [user]);

  // Generate a recipe based on mood and ingredients
  const generateRecipe = async (mood: string, ingredients: string[]): Promise<Recipe> => {
    try {
      // Use Gemini API to generate a recipe
      const generatedRecipe = await generateRecipeWithGemini(mood, ingredients, user?.height, user?.weight);
      
      // Add the recipe to the recipes list
      const newRecipe = { ...generatedRecipe, id: Date.now().toString() };
      setRecipes(prevRecipes => [...prevRecipes, newRecipe]);
      
      // Update current session with the new recipe ID
      if (currentSession) {
        const updatedSession = { ...currentSession, recipeId: newRecipe.id };
        setCurrentSession(updatedSession);
        
        // Update session history
        const updatedHistory = sessionHistory.map(session => 
          session.id === currentSession.id ? updatedSession : session
        );
        setSessionHistory(updatedHistory);
        
        // Save to localStorage
        if (user) {
          localStorage.setItem(`yummora-sessions-${user.id}`, JSON.stringify(updatedHistory));
        }
      }
      
      return newRecipe;
    } catch (error) {
      console.error("Error generating recipe:", error);
      // Fallback to a predefined recipe if generation fails
      return PREDEFINED_RECIPES[Math.floor(Math.random() * PREDEFINED_RECIPES.length)];
    }
  };

  // Save a recipe to favorites
  const saveRecipe = (recipe: Recipe) => {
    setSavedRecipes(prevSaved => {
      // Check if recipe is already saved
      if (prevSaved.some(saved => saved.id === recipe.id)) {
        return prevSaved;
      }
      const newSavedRecipes = [...prevSaved, recipe];
      // Save to localStorage
      if (user) {
        localStorage.setItem(`yummora-saved-recipes-${user.id}`, JSON.stringify(newSavedRecipes));
      }
      return newSavedRecipes;
    });
  };

  // Start a new cooking session
  const startNewSession = (mood: string, ingredients: string[]) => {
    const newSession: CookingSession = {
      id: Date.now().toString(),
      userId: user?.id || 'guest',
      mood,
      ingredients,
      timestamp: new Date()
    };
    
    setCurrentSession(newSession);
    setSessionHistory(prev => {
      const updated = [...prev, newSession];
      // Save to localStorage
      if (user) {
        localStorage.setItem(`yummora-sessions-${user.id}`, JSON.stringify(updated));
      }
      return updated;
    });
  };

  // Create the context value
  const value = {
    recipes,
    savedRecipes,
    sessionHistory,
    currentSession,
    generateRecipe,
    saveRecipe,
    startNewSession
  };

  return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>;
};

// Custom hook to use the recipe context
export const useRecipes = () => useContext(RecipeContext);