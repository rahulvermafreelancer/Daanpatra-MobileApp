import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const App = () => {
  const [pickerMode, setPickerMode] = useState(null);

  const showDatePicker = () => {
    setPickerMode("date");
  };
  

  const hidePicker = () => {
    setPickerMode(null);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hidePicker();
  };

  return (
    <View style={style.root}>
      <Button title="Show Time Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={pickerMode !== null}
        mode={pickerMode}
        onConfirm={handleConfirm}
        onCancel={hidePicker}
      />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;