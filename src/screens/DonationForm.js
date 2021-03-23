import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {Button, Text} from 'native-base';

import ProductQuntity from '../components/ProductQuantity';
import ProductCategory from '../components/ProductCategory';
import ProductDescription from '../components/ProductDescription';
import DatePicker from '../components/DatePicker';
import TimePicker from '../components/TimePicker';
import Address from '../components/Address';
import DonationFormButton from '../components/DonationFormButton';

import BackArrow from '../asset/images/BackArrow.png';
import DonationFormBG from '../asset/images/DonationFormBG.png';

const DonationForm = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.slidingView}>
        <View>
          <Image source={DonationFormBG} style={{width: '100%'}} />
          <View style={{position: 'absolute', width: '100%'}}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => navigation.goBack()}>
              <Image source={BackArrow} />
            </TouchableOpacity>
            <View style={styles.donationView}>
              <Text style={{fontSize: 18}}>Donation Form</Text>
            </View>
          </View>
        </View>
        <View style={styles.productCategories}>
          <ProductCategory />
        </View>
        <View style={styles.productCategories}>
          <Address />
        </View>
        <View style={styles.dateTime}>
          <View style={{width: '35%', marginLeft: '10%'}}>
            <DatePicker />
          </View>
          <View style={{width: '35%', marginRight: '10%'}}>
            <TimePicker />
          </View>
        </View>
        <View style={styles.productCategories}>
          <ProductQuntity />
        </View>
        <View style={styles.productCategories}>
          <ProductDescription />
        </View>
        <View style={styles.productCategories}>
          <DonationFormButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#CAD5E2',
  },

  slidingView: {
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
    marginTop: '10%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  submitButton: {
    marginTop: '15%',
    alignSelf: 'center',
    width: '50%',
    borderRadius: 60,
  },
  dateTime: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default DonationForm;
