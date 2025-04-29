import React from 'react';
import ProfileForm from '../components/profile/ProfileForm';
import { ChefHat } from 'lucide-react';

const OnboardingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div className="text-center">
          <div className="mx-auto inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full">
            <ChefHat className="text-orange-500" size={32} />
          </div>
          <h2 className="mt-4 text-3xl font-bold text-gray-800">
            Just one more step!
          </h2>
        </div>
        
        <ProfileForm />
      </div>
    </div>
  );
};

export default OnboardingPage;