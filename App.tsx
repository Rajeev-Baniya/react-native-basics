/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from 'react';
import 'react-native-gesture-handler'
import HomeScreen from './src/screens/Home';
import GuestScreen from './src/screens/Guests';
import feed from './assets/data/feed';

import {
  SafeAreaView, ScrollView, StatusBar
} from 'react-native';
import Router from './src/navigation/Router';



const post1 = feed[0]



function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
}



export default App;
