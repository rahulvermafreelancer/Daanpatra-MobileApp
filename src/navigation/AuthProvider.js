import React, {createContext, useState, useEffect} from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (phone, otp) => {
          try {
            return await auth().signInWithEmailAndPassword(phone, otp);
          } catch (error) {
            alert(error.message.substring(error.message.lastIndexOf(']') + 2))
          }
        },
        register: async (phone, otp) => {
          try {
            return await auth().createUserWithEmailAndPassword(phone, otp);
          } catch (error) {
            alert(error.message.substring(error.message.lastIndexOf(']') + 2))
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (error) {
            alert(error.message.substring(error.message.lastIndexOf(']') + 2))
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};



