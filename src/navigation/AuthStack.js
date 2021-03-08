import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{cardStyle: {backgroundColor: 'white'}}}>
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <BackButton onPress={() => navigation.navigate('Landing')} />
          ),
        })}
      />
      <Stack.Screen
        name="ResetPasswordRequest"
        component={ResetPasswordRequestScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <BackButton onPress={() => navigation.navigate('Login')} />
          ),
        })}
      />
      <Stack.Screen
        name="ResetPasswordFollowup"
        component={ResetPasswordFollowupScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <BackButton
              onPress={() => navigation.navigate('ResetPasswordRequest')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="ResetPasswordInfo"
        component={ResetPasswordInfoScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <BackButton
              onPress={() => navigation.navigate('ResetPasswordFollowup')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => <View style={{margin: 20}} />,
        })}
      />
      <Stack.Screen
        name="MoodLanding"
        component={MoodLanding}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <BackButton onPress={() => navigation.navigate('Landing')} />
          ),
        })}
      />
      <Stack.Screen
        name="Mood"
        component={MoodScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <BackButton onPress={() => navigation.navigate('MoodLanding')} />
          ),
        })}
      />
      <Stack.Screen
        name="MoodTag"
        component={MoodTagScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <BackButton onPress={() => navigation.navigate('Mood')} />
          ),
        })}
      />
      <Stack.Screen
        name="GratitudeLanding"
        component={GratitudeLandingScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <BackButton onPress={() => navigation.navigate('MoodTag')} />
          ),
        })}
      />
      <Stack.Screen
        name="GratitudeScreen"
        component={GratitudeScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <BackButton
              onPress={() => navigation.navigate('GratitudeLanding')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="JournalingLanding"
        component={JournalingLandingScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <BackButton
              onPress={() => navigation.navigate('GratitudeScreen')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Journaling"
        component={JournalingScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <BackButton
              onPress={() => navigation.navigate('JournalingLanding')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <BackButton onPress={() => navigation.navigate('Journaling')} />
          ),
        })}
      />
      <Stack.Screen
        name="SignupEmail"
        component={SignupEmailScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <BackButton onPress={() => navigation.navigate('Signup')} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
