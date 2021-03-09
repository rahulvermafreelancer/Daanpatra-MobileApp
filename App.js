import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

// import SplashScreen from 'react-native-splash-screen';

import HomeScreen from './src/screens/HomeScreen';

// import Providers from './src/navigation';

const App = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
  // return <Providers />;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default App;
