import React from 'react';
import {Image, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import style from '../../assets/style/mian';

const UserStory = props => {
  return (
    <View style={{padding: 5, flex: 1, alignItems: 'center'}}>
      <View style={style.storyImageContainer}>
        <Image style={style.storyImage} />
      </View>
      <Text style={{marginTop: 3}}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default UserStory;
