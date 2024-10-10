import PropTypes from 'prop-types';
import React from 'react';

import {Text} from 'react-native';
import style from './style';

const ProfileTabTitle = props => {
  return (
    <Text
      style={[
        style.title,
        {
          color: props.isFocused ? '#022510' : '#79869F',
          fontWeight: props.isFocused ? 'bold' : 'normal',
        },
      ]}>
      {props.title}
    </Text>
  );
};

ProfileTabTitle.PropTypes = {
  isFocused: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProfileTabTitle;
