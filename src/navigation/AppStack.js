import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Application Screens
import HomeScreen from '../screens/HomeScreen';
import Gallery from '../screens/Gallery';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

function MainStackScreen() {
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
    </MainStack.Navigator>
  );
}

function AppStack() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="HomeScreen"
        component={HomeScreen}
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
