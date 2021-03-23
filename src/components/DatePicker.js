import React, {useState} from 'react';
import {View, Button, Platform, StyleSheet, ViewBase} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Input } from 'native-base';

const DatePicker = () => {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View >
      <View style={styles.timePicker}>
        <Button onPress={showDatepicker} title="Choose Date" color="#F4BE2C"/>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          display="spinner"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  timePicker: {
    width: '100%',
    height: '10%'
  },
});


export default DatePicker;

