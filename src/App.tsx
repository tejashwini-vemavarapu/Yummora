import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { RecipeProvider } from './context/RecipeContext';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import CookingPage from './pages/CookingPage';
import RecipePage from './pages/RecipePage';
import SavedRecipesPage from './pages/SavedRecipesPage';
import HistoryPage from './pages/HistoryPage';
import ProfilePage from './pages/ProfilePage';
import { LoginPage, SignupPage } from './pages/AuthPages';
import OnboardingPage from './pages/OnboardingPage';

// Protected Route Component
const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{element}</> : <Navigate to="/login" />;
};

function AppRoutes() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/onboarding" element={<ProtectedRoute element={<OnboardingPage />} />} />
            <Route path="/cook" element={<CookingPage />} />
            <Route path="/recipe/:recipeId" element={<RecipePage />} />
            <Route path="/saved" element={<ProtectedRoute element={<SavedRecipesPage />} />} />
            <Route path="/history" element={<ProtectedRoute element={<HistoryPage />} />} />
            <Route path="/profile" element={<ProtectedRoute element={<ProfilePage />} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <RecipeProvider>
        <AppRoutes />
      </RecipeProvider>
    </AuthProvider>
  );
}

export default App;