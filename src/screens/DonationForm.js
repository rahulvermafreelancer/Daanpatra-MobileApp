import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {Button, Text} from 'native-base';

import ProductQuntity from '../components/ProductQuantity';
import ProductCategory from '../components/ProductCategory';
import ProductDescription from '../components/ProductDescription';
import DatePicker from '../components/DatePicker';
import TimePicker from '../components/TimePicker';

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
        <View style={styles.productCategories}>
          <ProductCategory />
        </View>
        <View style={styles.dateTime}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <DatePicker />
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <TimePicker />
          </View>
        </View>
        <View style={styles.productQuantity}>
          <ProductQuntity />
        </View>
        <View style={styles.productDescription}>
          <ProductDescription />
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <Button block warning>
            <Text>Donate</Text>
          </Button>
        </TouchableOpacity>
      </ImageBackground>
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
    paddingTop: '5%',
    paddingLeft: '5%',
  },
  donationView: {
    width: '50%',
    alignItems: 'center',
    marginTop: '10%',
    alignSelf: 'center',
    padding: 10,
    borderWidth: 0,
    borderRadius: 30,
    backgroundColor: '#D9D55B',
  },
  productCategories: {
    width: '80%',
    height: '10%',
    marginTop: '35%',
    alignSelf: 'center',
  },
  productDescription: {
    width: '80%',
    height: '30%',
    marginTop: '5%',
    alignSelf: 'center',
  },
  productQuantity: {
    width: '80%',
    height: '10%',
    marginTop: '5%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  submitButton: {
    marginTop: '10%',
    alignSelf: 'center',
    width: '50%',
    borderRadius: 60,
  },
  dateTime: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default DonationForm;
