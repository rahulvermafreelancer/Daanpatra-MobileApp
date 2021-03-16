import React from 'react';
import {StyleSheet, View} from 'react-native';

import TabBar from 'fluidbottomnavigation-rn';

const NewNav = ({navigation,  route}) => {
  return (
    <TabBar
      onPress={(tabIndex) => {
        let arr=["HomeScreen", "Gallery", "", "Rewards", "Profile"]
        // console.log(arr[tabIndex], navigation)
        navigation.navigate(arr[tabIndex])
      }}
      values={[
        {title: 'Home', icon: require('../asset/images/home.png')},
        {title: 'Gallery', icon: require('../asset/images/image.png')},
        {title: 'Doante', icon: require('../asset/images/plus.png')},
        {
          title: 'Certificate',
          icon: require('../asset/images/achivements.png'),
        },
        {title: 'Profile', icon: require('../asset/images/user.png')},
      ]}
      tintColor='black'
    />
  );
};


export default NewNav;
