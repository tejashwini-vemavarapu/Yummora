import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { useNavigate } from 'react-router-dom';

const ProfileForm: React.FC = () => {
  const { user, setUserProfile } = useAuth();
  const navigate = useNavigate();
  
  const [height, setHeight] = useState<string>(user?.height?.toString() || '');
  const [weight, setWeight] = useState<string>(user?.weight?.toString() || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      // Validate inputs
      const heightNum = parseFloat(height);
      const weightNum = parseFloat(weight);
      
      if (isNaN(heightNum) || heightNum <= 0) {
        throw new Error('Please enter a valid height');
      }
      
      if (isNaN(weightNum) || weightNum <= 0) {
        throw new Error('Please enter a valid weight');
      }
      
      // Update user profile
      setUserProfile({
        height: heightNum,
        weight: weightNum
      });
      
      // Navigate to home page
      navigate('/home');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Complete Your Profile</h2>
        <p className="text-gray-600 mt-2">
          This information helps us provide personalized recipe recommendations.
        </p>
      </div>
      
      <Input
        label="Height (cm)"
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Enter your height in centimeters"
        required
        fullWidth
      />
      
      <Input
        label="Weight (kg)"
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Enter your weight in kilograms"
        required
        fullWidth
      />
      
      {error && (
        <div className="text-red-500 text-sm py-2">{error}</div>
      )}
      
      <Button 
        type="submit" 
        isLoading={loading}
        fullWidth
        size="lg"
      >
        Continue
      </Button>
      
      <p className="text-gray-500 text-sm text-center">
        This information is kept private and only used to personalize your experience.
      </p>
    </form>
  );
};

export default ProfileForm;