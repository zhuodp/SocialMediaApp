import React from 'react';

import {FlatList, View} from 'react-native';
import UserStory from './UserStory';
import {useState} from 'react';

const UserStoryList = () => {
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
    <View>
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
  );
};

export default UserStoryList;
