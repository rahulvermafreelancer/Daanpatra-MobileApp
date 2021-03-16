import React from 'react';
import {View, ScrollView, StyleSheet, Text, SafeAreaView} from 'react-native';

import MyCarousel from '../components/MyCarousel';
import Nav from '../components/NewNav';

const Gallery = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.containerMain}>
          <View style={styles.pageHeading}>
            <Text style={styles.text}>Gallery</Text>
          </View>
          <MyCarousel />
        </View>
        <Nav navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  containerMain: {
    width: '100%',
    height: '89%',
    marginTop: '8%',
  },
  pageHeading: {
    width: '50%',
    height: '8%',
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
