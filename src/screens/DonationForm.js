import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import ProductCategory from '../components/ProductCategory';
import ProductQuntity from '../components/ProductQuantity';
import DatePicker from '../components/DatePicker';
import TimePicker from '../components/TimePicker';
import ProductDescription from '../components/ProductDescription';

import BackArrow from '../asset/images/BackArrow.png';
import DonationFormBG from '../asset/images/DonationFormBG.png';

const DonationForm = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={DonationFormBG}
        style={{width: '100%', height: '60%'}}>
        <TouchableOpacity
          style={styles.backArrow}
          onPress={() => navigation.goBack()}>
          <Image source={BackArrow} />
        </TouchableOpacity>
        <View style={styles.donationView}>
          <Text style={{fontSize: 18}}>Donation Form</Text>
        </View>
      </ImageBackground>
      <ScrollView>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  backArrow: {
    width: '100%',
    height: 20,
    paddingTop: '8%',
    paddingLeft: '5%',
  },
  donationView: {
    width: '50%',
    alignItems: 'center',
    marginTop: '20%',
    alignSelf: 'center',
    padding: 10,
    borderWidth: 0,
    borderRadius: 30,
    backgroundColor: '#D9D55B',
  },
});

export default DonationForm;
