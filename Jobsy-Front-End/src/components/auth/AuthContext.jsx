import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock login function (replace with Laravel API call later)
  const login = async (email, password) => {
    try {
      setIsLoading(true);
      // This is where you'll call your Laravel API endpoint
      console.log('Attempting login with:', email, password);
      
      // Mock response - replace with actual API call
      const mockUser = {
        id: 'user123',
        email,
        name: 'Mock User',
        role: 'user', // or 'worker'
        token: 'mock-jwt-token'
      };
      
      setCurrentUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Invalid credentials' };
    } finally {
      setIsLoading(false);
    }
  };

  // Mock register function
  const register = async (userData) => {
    try {
      setIsLoading(true);
      console.log('Attempting registration with:', userData);
      
      // Mock response
      const mockUser = {
        id: 'newuser123',
        email: userData.email,
        name: userData.name,
        role: userData.role,
        token: 'mock-jwt-token-new'
      };
      
      setCurrentUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return { success: true };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, message: 'Registration failed' };
    } finally {
      setIsLoading(false);
    }
  };

  // Mock logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  // Check for user in localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const value = {
    currentUser,
    isLoading,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}