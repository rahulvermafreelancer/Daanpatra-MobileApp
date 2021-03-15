import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Application Screens

import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import Rewards from '../screens/Certificate';
import Gallery from '../screens/Gallery';
import MainScreen from '../screens/MainScreen';
import CardScreen from '../screens/CardScreenOne';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Rewards"
        component={Rewards}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Gallery"
        component={Gallery}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="CardScreen"
        component={CardScreen}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};

function AppStack() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}

export default AppStack;
