import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import Certificates from '../components/Certificates';
import Nav from '../components/NewNav';

const Certificate = ({navigation, route}) => {
  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <Certificates />
      <Nav navigation={navigation} />
    </SafeAreaView>
  );
};

export default Certificate;
