export interface User {
  id: string;
  email: string;
  name: string;
  height?: number;
  weight?: number;
}

export interface UserProfile {
  height: number;
  weight: number;
}

export interface CookingSession {
  id: string;
  userId: string;
  mood: string;
  ingredients: string[];
  timestamp: Date;
  recipeId?: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  calories: number;
  tags: string[];
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  setUserProfile: (profile: UserProfile) => void;
}

export interface RecipeContextType {
  recipes: Recipe[];
  savedRecipes: Recipe[];
  sessionHistory: CookingSession[];
  currentSession: CookingSession | null;
  generateRecipe: (mood: string, ingredients: string[]) => Promise<Recipe>;
  saveRecipe: (recipe: Recipe) => void;
  startNewSession: (mood: string, ingredients: string[]) => void;
}