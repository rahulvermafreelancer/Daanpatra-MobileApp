import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import DaanpatraLogo from '../asset/images/DaanpatraLogo.png';
import SignupDonation from '../asset/images/SignupDonation.jpg';

const SignupScreen = ({navigation, route}) => {
  const [first_name, setFristName] = useState('');
  const [last_name, setLastName] = useState('');
  const [contact, setContact] = useState('');

  const SignUp = () => {
    let data = {first_name, last_name, contact};

    fetch('http://35.154.26.180/user-register/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.log('result', result);
    });
  };

  const changePage = () => {
    navigation.navigate('LoginScreen');
  };

   const otpGenerate = (
    phoneNo,
    success = (response) => {},
    failed = (error) => {},
  ) => {
    if (!phoneNo) {
      failed('not found');
      return;
    }
    getResult(
      '/otp/',
      'POST',
      JSON.stringify({username: phoneNo}),
      (response) => {
        if (response.status === 200) {
          success(response);
        } else {
          failed(response);
        }
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={DaanpatraLogo} style={styles.LogoAlign} />
        <Image
          source={SignupDonation}
          style={{
            width: '100%',
            height: '20%',
            alignSelf: 'center',
            marginTop: '2%',
          }}
        />
        <View>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="   First Name"
            placeholderTextColor="#000000"
            autoCapitalize="none"
            onChangeText={setFristName}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="   Last Name"
            placeholderTextColor="#000000"
            autoCapitalize="none"
            onChangeText={setLastName}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="   Phone Number"
            placeholderTextColor="#000000"
            autoCapitalize="none"
            onChangeText={setContact}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            SignUp();
            changePage();
            otpGenerate();
          }}>
          <View style={styles.button}>
            <Text>Register</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <View style={styles.LoginButton}>
            <Text>Already Exists Login Here</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  SignupHeading: {
    top: '5%',
    alignItems: 'center',
    borderWidth: 0,
    borderColor: '#FFBE00',
    backgroundColor: '#FFBE00',
    borderRadius: 20,
    padding: 10,
    width: '50%',
    alignSelf: 'center',
  },
  LogoAlign: {
    alignSelf: 'center',
    marginTop: '12%',
  },
  input: {
    margin: 20,
    height: 40,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 15,
  },
  button: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#FFDE00',
    backgroundColor: '#FFDE00',
    padding: 15,
    borderRadius: 10,
    marginTop: '5%',
  },
  LoginButton: {
    marginTop: '2%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default SignupScreen;

// fetch('https://mywebsite.com/endpoint/', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue',
//   }),
// })
//   .then((response) => response.json())
//   .then((responseJson) => {
//     Alert.alert('Author name at 0th index:  ' + responseJson[0].name);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
