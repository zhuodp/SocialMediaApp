import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import postStyle from '../../assets/style/userPost';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';

const UserPost = props => {
  return (
    <View style={postStyle.userPostCard}>
      {/* title */}
      <View style={postStyle.userPostTitleBar}>
        <Image style={postStyle.userPostAvatar} source={''} />
        <View
          style={{
            flexDirection: 'column',
            marginStart: 10,
          }}>
          <Text style={postStyle.userPostName}>
            {props.firstName} {props.lastName}
          </Text>
          {props.location && (
            <Text style={postStyle.userPostLocation}>{props.location}</Text>
          )}
        </View>
        <View style={{flex: 1}} />
        <Pressable>
          <FontAwesomeIcon icon={faEllipsisH} />
        </Pressable>
      </View>
      <Image style={postStyle.userPostImage} />
      <View style={postStyle.pressableContainer}>
        <Pressable style={postStyle.pressableItem}>
          <FontAwesomeIcon icon={faHeart} style={postStyle.pressableIcon} />
          <Text style={postStyle.pressableText}>{props.likes}</Text>
        </Pressable>
        <Pressable style={postStyle.pressableItem}>
          <FontAwesomeIcon icon={faComment} style={postStyle.pressableIcon} />
          <Text style={postStyle.pressableText}>{props.comments}</Text>
        </Pressable>
        <Pressable style={postStyle.pressableItem}>
          <FontAwesomeIcon icon={faBookmark} style={postStyle.pressableIcon} />
          <Text style={postStyle.pressableText}>{props.bookmarks}</Text>
        </Pressable>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default UserPost;
