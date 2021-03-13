

import React from 'react';
import {SafeAreaView, StyleSheet, View, Image, Text} from 'react-native';

// import TabsBar from '../components/TabsBar';
import NewNav from '../components/NewNav';
import DonateButton from '../components/DonateButton';
import DonateHistoryList from '../components/DonationHistoryList';

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
        <View style={styles.donation}>
          <Text style={styles.donationText}>Donation History</Text>
        </View>
        <View style={styles.list}>
          <DonateHistoryList />
        </View>
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
    flex: 4,
    flexDirection: 'column',
    width: '100%',
  },
  backImage: {
    width: '100%',
    height: '70%',
    position: 'absolute',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '65%',
  },
  list: {
    flex: 2,
    justifyContent: 'center',
    padding: 10,
    marginTop: '5%'
  },
  donation: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
    borderRadius: 30,
    width: '50%',
    alignSelf: 'center',
    marginTop: 10,
     backgroundColor: '#DDD101',
  },
  donationText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomeScreen;

