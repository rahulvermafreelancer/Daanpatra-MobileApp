import React, {createContext, useState, useEffect} from 'react';

import asyncstorage from '@react-native-community/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      return await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message.substring(error.message.lastIndexOf(']') + 2));
    }
  };

  const register = async (email, password) => {
    try {
      return await auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message.substring(error.message.lastIndexOf(']') + 2));
    }
  };

  const logout = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      alert(error.message.substring(error.message.lastIndexOf(']') + 2));
    }
  };

  useEffect(() => {
    initialise();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        register,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
