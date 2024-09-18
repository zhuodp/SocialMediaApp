import React from 'react';
import {Image, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import style from '../../assets/style/main';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStory = props => {
  return (
    <View style={{padding: 5, flex: 1, alignItems: 'center'}}>
      <UserProfileImage />
      <Text style={{marginTop: 3, fontSize: 12}}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default UserStory;
