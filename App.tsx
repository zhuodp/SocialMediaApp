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
      firstName: 'Jhon1',
      id: 4,
    },
    {
      firstName: 'Amie1',
      id: 5,
    },
    {
      firstName: 'Gavin1',
      id: 6,
    },
    {
      firstName: 'Gavin2',
      id: 7,
    },
    {
      firstName: 'Gavin3',
      id: 8,
    },
    {
      firstName: 'Gavin4',
      id: 9,
    },
  ];

  const pageSize = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderData, setRenderData] = useState(data.slice(0, pageSize));

  const pagination = (data, pageNumber, pageSize) => {
    let startIndex = (pageNumber - 1) * pageSize;
    if (startIndex > data.length) {
      return [];
    }
    setPageNumber(pageNumber);
    return data.slice(startIndex, startIndex + pageSize);
  };

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
            onEndReachedThreshold={0.1}
            keyExtractor={item => item.id.toString()}
            onEndReached={() => {
              if (!isLoading) {
                setIsLoading(true);
                setRenderData(prev => [
                  ...prev,
                  ...pagination(data, pageNumber + 1, pageSize),
                ]);
                setIsLoading(false);
              }
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={renderData}
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
