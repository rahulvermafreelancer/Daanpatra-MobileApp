
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import FirstSession from "./src/asset/images/FirstScreen.jpg" ;
import LastScreen from './src/asset/images/LastScreen.jpg';


const CardScreenOne = () => {

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
      <StatusBar />
        <ScrollView>
        <View>
            <View style={styles.CardStyle}>
                <Image source={FirstSession} style={styles.firstSession} />
                <Text style={styles.heading} >Daanpatra</Text>
                <Text style={styles.paragraph}>We belive in doing not just thinking</Text>
                <Text style={styles.NewParagraph}>We are a family</Text>
                <Image source={LastScreen} style={styles.lastSession} />
            </View>
        </View>
        </ScrollView>
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
