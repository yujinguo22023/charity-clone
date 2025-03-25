
import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if user is logged in (token in localStorage)
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      try {
        // Verify and decode the token
        const decodedToken = jwtDecode<User & { exp: number }>(storedToken);
        
        // Check if token is expired
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          // Token is expired
          localStorage.removeItem('token');
          setToken(null);
          setUser(null);
        } else {
          // Token is valid
          setToken(storedToken);
          setUser({
            id: decodedToken.id,
            email: decodedToken.email,
            name: decodedToken.name,
            role: decodedToken.role
          });
        }
      } catch (error) {
        console.error('Invalid token:', error);
        localStorage.removeItem('token');
      }
    }
    setIsLoading(false);
  }, []);

  // Mock API for authentication (in a real app, this would be replaced with actual API calls)
  const mockUsers = [
    { id: '1', name: 'Admin User', email: 'admin@example.com', password: 'admin123', role: 'admin' as const },
    { id: '2', name: 'Regular User', email: 'user@example.com', password: 'user123', role: 'user' as const }
  ];

  const generateToken = (user: typeof mockUsers[0]): string => {
    // In a real app, this would be handled by the backend
    const now = Date.now();
    const expiresIn = 60 * 60 * 24; // 24 hours
    
    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      iat: Math.floor(now / 1000),
      exp: Math.floor(now / 1000) + expiresIn
    };
    
    // This is a mock implementation - in a real app, JWT would be created by the backend
    return btoa(JSON.stringify(payload));
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulating API request delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Find user
      const foundUser = mockUsers.find(u => u.email === email && u.password === password);
      
      if (!foundUser) {
        throw new Error('Invalid email or password');
      }
      
      // Generate token
      const generatedToken = generateToken(foundUser);
      
      // Save user info
      setUser({
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
        role: foundUser.role
      });
      
      // Save token
      setToken(generatedToken);
      localStorage.setItem('token', generatedToken);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulating API request delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user already exists
      if (mockUsers.find(u => u.email === email)) {
        throw new Error('User with this email already exists');
      }
      
      // In a real app, this would send a request to create a user in the database
      const newUser = {
        id: String(mockUsers.length + 1),
        name,
        email,
        password,
        role: 'user' as const
      };
      
      // Add to mock users (for demo purposes)
      mockUsers.push(newUser);
      
      // Login the new user
      await login(email, password);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
