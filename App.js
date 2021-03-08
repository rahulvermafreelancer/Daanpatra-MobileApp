import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Cards from './src/components/Cards';
import Navbar from './src/components/Navbar';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Cards />
      <Navbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
  },
});

export default App;
