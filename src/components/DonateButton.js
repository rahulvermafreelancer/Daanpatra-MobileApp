import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const DonateButton = () => {
  return (
    <View style={{justifyContent: 'flex-start', alignItems: 'center'}}>
      <TouchableOpacity
        style={styles.upperCircle}>
        <View style={styles.innerCircle}>
          <View style={styles.innerMostCircle}>
            <Text style={{fontSize: 80}}>+</Text>
            <Text style={{fontSize: 16}}>Donate</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  upperCircle: {
    height: '70%',
    width: '80%',
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

export default DonateButton;

