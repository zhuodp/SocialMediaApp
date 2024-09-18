/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from './assets/style/main';
import UserStoryList from './components/UserStory/UserStoryList';
import Title from './components/title/Title';
import UserPostList from './components/UserPost/UserPostList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.hedaer}>
          <Title title={"Let's explore"} />
          <Pressable style={style.messageIcon}>
            <FontAwesomeIcon icon={faEnvelope} color={'#CACDDE'} size={20} />
            <View style={style.messageNumberContainer}>
              <Text style={style.messageNumber}>2</Text>
            </View>
          </Pressable>
        </View>
        <View style={style.userStoryContainer}>
          <UserStoryList />
        </View>
        <UserPostList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
