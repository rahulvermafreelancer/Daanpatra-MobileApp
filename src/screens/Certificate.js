import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import Certificates from '../components/Certificates';

const Certificate = ({navigation, route}) => {
  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <Certificates />
    </SafeAreaView>
  );
};

export default Certificate;
