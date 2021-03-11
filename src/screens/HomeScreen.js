import React from 'react';
import {SafeAreaView, StyleSheet, View, Image} from 'react-native';

import Navbar from '../components/Navbar';

//import image
import HomeBackground from '../asset/images/HomeBackground.png';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={HomeBackground} style={styles.background} />
      </View>
      <Navbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  background: {
    flexDirection: 'column',
    width: '100%',
    height: '80%',
  },
});

export default HomeScreen;
