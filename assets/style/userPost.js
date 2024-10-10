import {StyleSheet} from 'react-native';

const usePost = StyleSheet.create({
  userPostListContainer: {
    height: '100%',
    paddingHorizontal: 18,
  },
  userPostCard: {
    width: '100%',
    marginTop: 20,
    flex: 1,
    flexDirection: 'column',
  },
  userPostTitleBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingEnd: 5,
    paddingBottom: 10,
  },
  userPostAvatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'green',
  },
  userPostImage: {
    width: '100%',
    height: 180,
    borderRadius: 5,
    backgroundColor: 'grey',
  },
  userPostName: {
    fontSize: 13,
    color: 'black',
  },
  userPostLocation: {
    fontSize: 8,
    color: '#79869F',
  },
  pressableContainer: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
  },
  pressableItem: {
    flexDirection: 'row',
  },
  pressableIcon: {
    size: 10,
    color: '#79869F',
  },
  pressableText: {
    fontSize: 12,
    marginStart: 3,
    marginEnd: 20,
    color: '#79869F',
  },
});

export default usePost;
