import React from 'react';
import { View, FlatList } from 'react-native';
import { useState } from 'react';
import UserPost from './UserPost';

const UserPostList = () => {
  const data = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      likes: 120,
      comments: 25,
      bookmarks: 55,
      location: 'New York',
      id: 1,
    },
    {
      firstName: 'Allison1',
      lastName: 'Becker1',
      likes: 120,
      comments: 25,
      bookmarks: 55,
      location: 'New York',
      id: 2,
    },
    {
      firstName: 'Allison2',
      lastName: 'Becker2',
      likes: 120,
      comments: 25,
      bookmarks: 55,
      location: 'New York',
      id: 3,
    },
    {
      firstName: 'Allison3',
      lastName: 'Becker3',
      likes: 120,
      comments: 25,
      bookmarks: 55,
      location: 'New York',
      id: 4,
    },
    {
      firstName: 'Allison4',
      lastName: 'Becker4',
      likes: 120,
      comments: 25,
      bookmarks: 55,
      location: 'New York',
      id: 5,
    },
    {
      firstName: 'Allison5',
      lastName: 'Becker5',
      likes: 120,
      comments: 25,
      bookmarks: 55,
      location: 'New York',
      id: 6,
    },
    {
      firstName: 'Allison6',
      lastName: 'Becker6',
      likes: 120,
      comments: 25,
      bookmarks: 55,
      location: 'New York',
      id: 7,
    },
    {
      firstName: 'Allison7',
      lastName: 'Becker7',
      likes: 120,
      comments: 25,
      bookmarks: 55,
      location: 'New York',
      id: 8,
    },
  ];

  const pageSize = 2;
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
          return <UserPost firstName={item.firstName} />;
        }}
      />
    </View>
  );
};

export default UserPostList;
