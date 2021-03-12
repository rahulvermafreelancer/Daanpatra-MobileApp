import React from 'react';
import {SafeAreaView, StyleSheet, View, Image} from 'react-native';

// import TabsBar from '../components/TabsBar';
import NewNav from '../components/NewNav';
import DonateButton from '../components/DonateButton';

//import image
import HomeBackground from '../asset/images/HomeBackground.png';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.backImage}>
          <Image source={HomeBackground} style={styles.background} />
        </View>
        <DonateButton />
      </View>
      <NewNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  body: {
    flex: 6,
    flexDirection: 'column',
    width: '100%',
    paddingTop: '20%',
  },
  backImage: {
    width: '100%',
    height: '80%',
    position: 'absolute',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '65%',
  },
});

export default HomeScreen;
