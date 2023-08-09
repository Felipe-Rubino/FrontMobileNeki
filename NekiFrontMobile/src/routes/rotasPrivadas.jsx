import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home';
import BotaoLogout from '../Components/BotaoLogout';
import {Image} from 'react-native';
import CadastroSkill from '../Components/HeaderSkill';
import Skill from '../Screens/Skill';
import Icon from 'react-native-vector-icons/MaterialIcons';
const AppStack = createNativeStackNavigator();

function Logo(){
  return(
    <Image  
      style={{width: 220, height: 80, resizeMode: 'cover'}}
      source={require('../assets/images/logo.png')}
    />
  )
}

export default function RotasPrivadas() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} options={{
        headerStyle:{
          backgroundColor :  '#3b8ea5'
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitle: (props) => <Logo {...props} /> ,
        headerRight: () =>(
          <BotaoLogout />
        ),
        headerLeft: () =>(
          <CadastroSkill />
        )
      }}/>
      <AppStack.Screen name="Skill" component={Skill} options={{
        headerStyle:{
          backgroundColor :  '#3b8ea5'
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitle: (props) => <Logo {...props} /> 
      }} />
    </AppStack.Navigator>
  )
}