import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import BGImage from '../asset/images/LanguagePage.png';
import DaanpatraLogo from '../asset/images/DaanpatraLogo.png';
import MainScreenVector from '../asset/images/MainScreenVector.png';

const MainScreen = ({navigation, route}) => {
  return (
    <>
      <View style={styles.container}>
        <Image source={BGImage} style={styles.backImage} />
        <TouchableOpacity onPress={() => navigation.navigate('CardScreen')}>
          <View>
            <Image source={DaanpatraLogo} style={styles.ImageLogo} />
          </View>
          <View>
            <Image source={MainScreenVector} style={styles.mainScreenVector} />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backImage: {
    height: 900,
    resizeMode: 'stretch',
    position: 'absolute',
  },
  ImageLogo: {
    alignSelf: 'center',
    top: '180%',
  },
  mainScreenVector: {
    alignSelf: 'center',
    top: '245%',
  },
});

export default MainScreen;
