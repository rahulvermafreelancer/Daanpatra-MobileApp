import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import Screens
import HomeScreen from './src/screens/HomeScreen';
import Profile from './src/screens/Profile';
import Rewards from './src/screens/Certificate';
import Gallery from './src/screens/Gallery';

import MainScreen from './src/screens/MainScreen';
import CardScreen from './src/screens/CardScreenOne';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="CardScreen" component={CardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Gallery" component={Gallery} options={{ headerShown: false }} />
        <Stack.Screen name="Rewards" component={Rewards} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
