
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Signup from '../asset/images/LastScreen.jpg';
import DaanpatraLogo from '../asset/images/DaanpatraLogo.png';



const  SignupScreen = () => {
  return (
    <SafeAreaView>

      <View>
          <Image source={DaanpatraLogo} style={styles.LogoAlign} />
      </View>

        <View style={styles.SignupHeading}>
            <Text>
                Signup
            </Text>
        </View>
        <View>
            <TextInput 
              style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "   Phone Number"
              placeholderTextColor = "#000000"
              autoCapitalize = "none"
            />
        </View>
        <View style={styles.button}> 
            <TouchableOpacity>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Image source={Signup} style={styles.SignupBackground} />
        </View>
        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
    SignupBackground: {
      top: "35%",
      width: '100%',
      height:'60%',
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
    alignSelf: 'center'
  },
  LogoAlign: {
    alignSelf: 'center',
    marginTop: '10%'
  },
  input: {
    top: '70%',
    margin: 20,
    height: 40,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 10,
 },
 button: {
   alignSelf: 'center',
   top: '8%',
   borderWidth: 0,
   borderColor: '#FFDE00',
   backgroundColor: '#FFDE00',
   padding: 15,
   borderRadius: 10,
 }
});

export default SignupScreen;



