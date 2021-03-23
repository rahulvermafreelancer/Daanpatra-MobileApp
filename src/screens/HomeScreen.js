import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';

// import TabsBar from '../components/TabsBar';
import NewNav from '../components/NewNav';
import DonateHistoryList from '../components/DonationHistoryList';

//import image
import HomeBackground from '../asset/images/HomeBackground.png';

const HomeScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.backImage}>
          <Image source={HomeBackground} style={styles.background} />
        </View>
        <TouchableOpacity onPress={ () => navigation.navigate('DonationForm')}>
        <View style={{justifyContent: 'flex-start', alignItems: 'center', paddingTop: '20%'}}>
        <TouchableOpacity onPress={ () => navigation.navigate('DonationForm')}
          style={styles.upperCircle}>
          <View style={styles.innerCircle}>
            <View style={styles.innerMostCircle}>
              <Text style={{fontSize: 80}}>+</Text>
              <Text style={{fontSize: 16}}>Donate</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
        </TouchableOpacity>
        <View style={styles.donation}>
          <Text style={styles.donationText}>Donation History</Text>
        </View>
        <View style={styles.list}>
          <DonateHistoryList />
        </View>
      </View>

      <NewNav navigation={navigation} />
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
    marginTop: '5%',
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
    backgroundColor: '#F7CD2E',
  },
  donationText: {
    fontSize: 18,
    fontWeight: '700',
  },
  upperCircle: {
    height: '70%',
    width: '60%',
    borderRadius: Dimensions.get('window').width / 2,
    backgroundColor: '#fdf8ee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    height: '80%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Dimensions.get('window').width / 2,
    backgroundColor: '#fffefd',
  },
  innerMostCircle: {
    height: '80%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Dimensions.get('window').width / 2,
    backgroundColor: '#ffe687',
  },
});

export default HomeScreen;
