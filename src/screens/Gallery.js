import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';

import MyCarousel from '../components/MyCarousel';

const Gallery = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerMain}>
        <View style={styles.pageHeading}>
          <Text style={styles.text}>Gallery</Text>
        </View>
        <MyCarousel />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  containerMain: {
    width: '100%',
    height: '100%',
    marginTop: '10%',
  },
  pageHeading: {
    width: '50%',
    height: '10%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
    borderRadius: 20,
    backgroundColor: '#DDD101',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Gallery;
