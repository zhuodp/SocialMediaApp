/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Title from './components/title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from './assets/style/mian';
import UserStory from './components/UserStory/UserStory';

const App = () => {
  // all of the items in the stories.
  const data = [
    {
      firstName: 'Jhon',
      id: 1,
    },
    {
      firstName: 'Amie',
      id: 2,
    },
    {
      firstName: 'Gavin',
      id: 3,
    },
    {
      firstName: 'Jhon',
      id: 4,
    },
    {
      firstName: 'Amie',
      id: 5,
    },
    {
      firstName: 'Gavin',
      id: 6,
    },
  ];

  const pageSize = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderData, setRenderData] = useState([]);

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
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            renderItem={({item}) => {
              return <UserStory firstName={item.firstName} />;
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
