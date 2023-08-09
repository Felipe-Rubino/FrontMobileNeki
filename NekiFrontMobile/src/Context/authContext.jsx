import React, {createContext, useEffect, useState} from 'react';
import {Api, createSession} from '../Service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState('')

  const logout = () =>{
    AsyncStorage.removeItem("token")
    setToken(null)
  }
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
