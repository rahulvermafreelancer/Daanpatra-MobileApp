import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import MainScreen from '../screens/MainScreen';
import CardScreenOne from '../screens/CardScreenOne';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{cardStyle: {backgroundColor: 'white'}}}>
      <Stack.Screen
        name="Landing"
        component={MainScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="CardScreenOne"
        component={CardScreenOne}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <BackButton onPress={() => navigation.navigate('CardScreenOne')} />
          ),
        })}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <BackButton onPress={() => navigation.navigate('LoginScreen')} />
          ),
        })}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <BackButton onPress={() => navigation.navigate('SignupScreen')} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
