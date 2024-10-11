import React from 'react';

import {ScrollView, View, Image} from 'react-native';
import style from './style';

const ProfileTabPost = () => {
  return (
    <ScrollView style={style.profilePostCcontainer}>
      <View style={style.postImageContainer}>
        <Image style={style.postImage} />
        <Image style={style.postImage} />
      </View>
      <View style={style.postImageContainer}>
        <Image style={style.postImage} />
        <Image style={style.postImage} />
      </View>
      <View style={style.postImageContainer}>
        <Image style={style.postImage} />
        <Image style={style.postImage} />
      </View>
      <View style={style.postImageContainer}>
        <Image style={style.postImage} />
        <Image style={style.postImage} />
      </View>
      <View style={style.postImageContainer}>
        <Image style={style.postImage} />
        <Image style={style.postImage} />
      </View>
    </ScrollView>
  );
};

export default ProfileTabPost;
