
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

import FirstSession from "../asset/images/FirstScreen.jpg" ;
import LastScreen from '../asset/images/LastScreen.jpg';


const CardScreenOne = ({navigation, route}) => {

  const Data = [

    {
      id: 1,
      title: 'We belive in doing not just thinking',
      subTitle: 'We are a family'
    },
    {
      id: 2,
      title: 'We belive in doing not just thinking',
      subTitle: 'We are a family'
    },
    {
      id: 3,
      title: 'We belive in doing not just thinking',
      subTitle: 'We are a family'
    }
  ];

  
  return (
    <SafeAreaView>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <View>
            <View style={styles.CardStyle}>
                <Image source={FirstSession} style={styles.firstSession} />
                <Text style={styles.heading} >Daanpatra</Text>
                <Text style={styles.paragraph}>We belive in doing not just thinking</Text>
                <Text style={styles.NewParagraph}>We are a family</Text>
                <Image source={LastScreen} style={styles.lastSession} />
            </View>
        </View>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  CardStyle : {
    width: '100%'
  },
  firstSession : {
    width: 420,
    height: 400,
    bottom : 30
  },
  heading: {
    fontSize: 40,
    textAlign: 'left',
    marginLeft: '7%',
  },
  paragraph : {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: '7%',
  },
  NewParagraph: {
    fontSize: 17,
    textAlign: 'left',
    marginLeft: '7%',
  },
  lastSession: {
    width: 420,
    height: 400,
  }
});

export default CardScreenOne;
