
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import BGImage from '../asset/images/LanguagePage.png' ;
import DaanpatraLogo from '../asset/images/DaanpatraLogo.png' ;
import MainScreenVector from '../asset/images/MainScreenVector.png';


const MainScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar/>
        <View>
            <Image source={BGImage} style={styles.backImage} />
            <View>
              <Image source={DaanpatraLogo} style={styles.ImageLogo} />
            </View>
            <View>
              <Image source={MainScreenVector} style={styles.mainScreenVector} />
            </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  backImage: {
    height: 900,
    resizeMode: 'stretch',
    position: 'absolute',
    
  },
  ImageLogo : {
    alignSelf: 'center',
    top: 300,
  },
  mainScreenVector : {
    alignSelf: 'center',
    top: 495
  },  

});

export default MainScreen;
