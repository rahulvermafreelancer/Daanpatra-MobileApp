
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Login from './src/asset/images/LastScreen.jpg';
import DaanpatraLogo from './src/asset/images/DaanpatraLogo.png';



const  App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
          <View>
          <CardEcomFour
            title={"Porsche Rubber"}
            subTitle={"Zermatt is famed as a mounering and ski destome banmdo liono"}
            price={"$200"}
            image={require("./src/asset/images")}
            buttonText={"VIEW DETAILS"}
            buttonColor={"#4383FF"}
            onClickButton={() => alert("Has clicked")}
          />
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  
});

export default App;



