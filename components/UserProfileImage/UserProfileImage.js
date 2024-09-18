import React from 'react';

import {View, Image} from 'react-native';
import style from '../../assets/style/main';

const UserProfileImage = props => {
  return (
    <View style={style.storyImageContainer}>
      <Image style={style.storyImage} />
    </View>
  );
};

export default UserProfileImage;
