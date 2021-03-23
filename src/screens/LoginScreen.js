import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import * as conf from "../config/Config";
import DaanpatraLogo from '../asset/images/DaanpatraLogo.png';
import LoginDonation from '../asset/images/LoginDonation.jpg';

const LoginScreen = ({navigation, route}) => {
  const [phoneNo, setPhoneNo] = useState();
  const [otp, setOtp] = useState();

  const getResult = (
    url,
    method = "GET",
    data = null,
    success = () => {},
    failed = () => {}
  ) => {
    let parameters = {};
    parameters.method = method;
    if (data) {
      parameters.body = data;
    }
    parameters.headers = {
      "Content-Type": "application/json",
      
    };
    try {
      fetch(conf.apiUrl + url, parameters)
        .then((response) => response.json())
        .then((res) => {
          success(res);
        })
        .catch((error) => {
          failed(error);
        });
    } catch (error) {
      failed(error);
    }
  };
  

  const signin = (phoneNo, otp, success = () => {}, failed = () => {}) => {
    if (!otp || !phoneNo) return;
    getResult(
      "/login/",
      "POST",
      JSON.stringify({ username: phoneNo, password: otp }),
      (response) => {
        success(response);
      }
    );
  };

  const changePage = () => {
    navigation.navigate('HomeScreen');
  };



  return (
    <SafeAreaView>
      <View>
        <Image source={DaanpatraLogo} style={styles.LogoAlign} />
        <Image source={LoginDonation} style={{width: '100%', height: '40%'}} />
        <View>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Phone Number"
            placeholderTextColor="#000000"
            autoCapitalize="none"
            onChangeText={(phoneNo) => setPhoneNo(phoneNo)}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="OTP"
            placeholderTextColor="#000000"
            autoCapitalize="none"
            onChangeText={(otp) => setOtp(otp)}
          />
        </View>
        <TouchableOpacity
        onPress={ () => {
          signin();
          changePage();
        }}
        style={styles.button}>
        <View>
          <Text>Submit</Text>
        </View>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  LogoAlign: {
    alignSelf: 'center',
    marginTop: '10%',
  },
  input: {
    margin: 10,
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#FFDE00',
    backgroundColor: '#FFDE00',
    padding: 15,
    borderRadius: 10,
    marginTop: '5%'
  },
});

export default LoginScreen;


