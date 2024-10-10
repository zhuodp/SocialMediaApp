/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StatusBar,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from './assets/style/main';
import UserStoryList from './components/UserStory/UserStoryList';
import Title from './components/title/Title';
import UserPostList from './components/UserPost/UserPostList';
import Home from './screens/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';

const App = () => {
  return(<NavigationContainer>
    <MainNavigation />
  </NavigationContainer>);
};

export default App;
