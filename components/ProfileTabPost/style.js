import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  profilePostCcontainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  postImage: {
    backgroundColor: 'grey',
    maxWidth: 130,
    maxHeight: 100,
    width: 130,
    height: 100,
    borderRadius: 5,
  },
  postImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
});

export default style;
