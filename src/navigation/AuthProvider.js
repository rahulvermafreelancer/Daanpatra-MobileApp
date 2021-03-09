import React, {createContext, useState, useEffect} from 'react';

import asyncstorage from '@react-native-community/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  
  const [user, setUser] = useState(null);

  const login = async (phone,otp) => {
    try {
      return await auth().signInWithEmailAndPassword(phone, otp);
    } catch (error) {
      alert(error.message.substring(error.message.lastIndexOf(']') + 2));
    }
  };

  const register = async (phone) => {
    try {
      return await auth().createUserWithEmailAndPassword(phone, otp);
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
