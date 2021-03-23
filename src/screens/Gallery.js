import React from 'react';
import {View, ScrollView, StyleSheet, Text, SafeAreaView} from 'react-native';

import MyCarousel from '../components/MyCarousel';
import Nav from '../components/NewNav';

const Gallery = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView style={styles.containerMain}>
          <MyCarousel />
        </ScrollView>
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
    height: '100%',
    marginTop: '5%',
  },
});

export default Gallery;
