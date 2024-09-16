import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  hedaer: {
    paddingTop: 30,
    paddingLeft: 17,
    paddingRight: 26,
    paddingEnd: 17,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    backgroundColor: '#F9FAFB',
    padding: 20,
    borderRadius: 100,
  },
  messageNumberContainer: {
    height: 10,
    width: 10,
    flex: 1,
    backgroundColor: '#F35BAC',
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 16,
    top: 16,
  },
  messageNumber: {
    fontSize: 6,
    fontFamily: 'Inter',
    lineHeight: 7,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default style;
