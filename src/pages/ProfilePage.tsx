import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const { user, logout, setUserProfile } = useAuth();
  const navigate = useNavigate();
  
  const [height, setHeight] = useState<string>(user?.height?.toString() || '');
  const [weight, setWeight] = useState<string>(user?.weight?.toString() || '');
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  const handleSaveProfile = async () => {
    setIsSaving(true);
    
    try {
      // Validate inputs
      const heightNum = parseFloat(height);
      const weightNum = parseFloat(weight);
      
      if (!isNaN(heightNum) && !isNaN(weightNum) && heightNum > 0 && weightNum > 0) {
        setUserProfile({
          height: heightNum,
          weight: weightNum
        });
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Error saving profile:', error);
    } finally {
      setIsSaving(false);
    }
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-orange-500 h-32 relative">
            <div className="absolute -bottom-16 left-8">
              <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center border-4 border-white shadow-md">
                <User size={64} className="text-gray-400" />
              </div>
            </div>
          </div>
          
          <div className="pt-20 px-8 pb-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{user?.name}</h1>
                <p className="text-gray-600">{user?.email}</p>
              </div>
              <button 
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-red-500 transition-colors"
              >
                <LogOut size={20} className="mr-2" />
                Logout
              </button>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Profile Information</h2>
                {!isEditing ? (
                  <Button variant="outline" onClick={() => setIsEditing(true)}>
                    Edit Profile
                  </Button>
                ) : (
                  <div className="space-x-3">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setIsEditing(false);
                        setHeight(user?.height?.toString() || '');
                        setWeight(user?.weight?.toString() || '');
                      }}
                    >
                      Cancel
                    </Button>
                    <Button onClick={handleSaveProfile} isLoading={isSaving}>
                      Save
                    </Button>
                  </div>
                )}
              </div>
              
              {isEditing ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Height (cm)"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Enter your height in centimeters"
                  />
                  
                  <Input
                    label="Weight (kg)"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter your weight in kilograms"
                  />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Height</p>
                    <p className="text-lg font-medium">
                      {user?.height ? `${user.height} cm` : 'Not specified'}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Weight</p>
                    <p className="text-lg font-medium">
                      {user?.weight ? `${user.weight} kg` : 'Not specified'}
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="border-t border-gray-200 mt-8 pt-8">
              <p className="text-sm text-gray-500">
                This information is used to provide personalized recipe recommendations based on your nutritional needs.
                Your data is kept private and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;