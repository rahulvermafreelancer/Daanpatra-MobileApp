import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import Screens
import HomeScreen from './src/screens/HomeScreen';
import Profile from './src/screens/Profile';
import Rewards from './src/screens/Certificate';
import Gallery from './src/screens/Gallery';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Rewards">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Gallery" component={Gallery}  />
        <Stack.Screen name="Rewards" component={Rewards} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
