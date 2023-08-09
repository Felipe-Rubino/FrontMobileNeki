import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Screens/Login'
import Cadastro from '../Screens/Cadastro';

const AuthStack = createNativeStackNavigator();

export default function RotasPublicas() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
          <AuthStack.Screen name="Login" component={Login} />
          <AuthStack.Screen name="Cadastro" component={Cadastro} />
    </AuthStack.Navigator>
  )
}