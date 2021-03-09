import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Application Screens
import HomeScreen from '../screens/HomeScreen';
import Gallery from '../screens/Gallery';
import Profile from '../screens/Profile';
import Certificate from '../screens/Certificate';


const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const  MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Gallery"
        component={Gallery}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <BackButtonYellowBubble
              onPress={() => navigation.navigate('Gallery')}
            />
          ),
        })}
      />
       <MainStack.Screen
        name="Profile"
        component={Profile}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <BackButtonYellowBubble
              onPress={() => navigation.navigate('Profile')}
            />
          ),
        })}
      />
       <MainStack.Screen
        name="Certificate"
        component={Certificate}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <BackButtonYellowBubble
              onPress={() => navigation.navigate('Certificate')}
            />
          ),
        })}
      />
    </MainStack.Navigator>
  );
}

function AppStack() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{headerShown: false}}
      />

      <RootStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}

export default AppStack;
