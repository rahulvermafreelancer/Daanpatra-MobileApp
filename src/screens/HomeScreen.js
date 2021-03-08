import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Cards from '../components/Cards';
import Navbar from '../components/Navbar';
import MyCarousel from '../components/MyCarousel';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MyCarousel />
      <Navbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;
