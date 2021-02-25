import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View, StyleSheet} from 'react-native';
import BottomTabNav from './src/components/BottomTabNav';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <BottomTabNav />
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
