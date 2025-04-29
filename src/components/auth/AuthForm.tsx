import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { useNavigate } from 'react-router-dom';

interface AuthFormProps {
  isLogin?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin = true }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        if (!name) {
          throw new Error('Name is required');
        }
        await signup(email, password, name);
      }
      navigate('/onboarding');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      {!isLogin && (
        <Input
          label="Full Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
          fullWidth
        />
      )}
      
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        fullWidth
      />
      
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
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
      >
        {isLogin ? 'Sign In' : 'Create Account'}
      </Button>
      
      <div className="text-center mt-4">
        <p className="text-gray-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <a 
            href={isLogin ? "/signup" : "/login"} 
            className="text-orange-500 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              navigate(isLogin ? "/signup" : "/login");
            }}
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </a>
        </p>
      </div>
    </form>
  );
};

export default AuthForm;