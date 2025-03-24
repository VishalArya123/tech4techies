import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check local storage for existing user on mount
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  // Sign in function
  const signIn = (email, password) => {
    // Simulate checking credentials
    const mockUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = mockUsers.find(u => u.email === email);
    
    if (user && user.password === password) {
      // Remove password before storing in context
      const { password: _, ...userWithoutPassword } = user;
      setCurrentUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      return { success: true };
    }
    
    return { success: false, message: "Invalid email or password" };
  };

  // Sign up function
  const signUp = (name, email, password) => {
    const mockUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if email already exists
    if (mockUsers.some(user => user.email === email)) {
      return { success: false, message: "Email already in use" };
    }
    
    // Create new user
    const newUser = {
      id: `user-${Date.now()}`,
      name,
      email,
      password,
      createdAt: new Date().toISOString()
    };
    
    // Save to mock database
    mockUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(mockUsers));
    
    // Log in the new user
    const { password: _, ...userWithoutPassword } = newUser;
    setCurrentUser(userWithoutPassword);
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    
    return { success: true };
  };

  // Sign out function
  const signOut = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  // Update user profile
  const updateProfile = (updatedData) => {
    const updatedUser = { ...currentUser, ...updatedData };
    
    // Update in mock database
    const mockUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = mockUsers.map(user => 
      user.id === currentUser.id ? { ...user, ...updatedData } : user
    );
    
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    // Update current user
    setCurrentUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    
    return { success: true };
  };

  const value = {
    currentUser,
    signIn,
    signUp,
    signOut,
    updateProfile,
    isAuthenticated: !!currentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;