import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import { ChefHat } from 'lucide-react';

interface AuthPageProps {
  isLogin?: boolean;
}

const AuthPage: React.FC<AuthPageProps> = ({ isLogin = true }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div className="text-center">
          <div className="mx-auto inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full">
            <ChefHat className="text-orange-500" size={32} />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-800">
            {isLogin ? 'Welcome back!' : 'Create your account'}
          </h2>
          <p className="mt-2 text-gray-600">
            {isLogin
              ? 'Sign in to access your personalized recipes'
              : 'Join Yummora to discover recipes tailored to you'}
          </p>
        </div>
        
        <AuthForm isLogin={isLogin} />
      </div>
    </div>
  );
};

export const LoginPage: React.FC = () => <AuthPage isLogin={true} />;
export const SignupPage: React.FC = () => <AuthPage isLogin={false} />;