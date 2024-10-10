import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  profileImageContainer: {
    felx: 1,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileImageContent: {
    borderWidth: 1,
    padding: 2,
    borderColor: '#0150EC',
    borderRadius: 42,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'grey',
  },
  userName: {
    color: '#022150',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    marginTop: 5,
  },
  userNameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileStatsContainer: {
    marginTop: 12,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileStat: {
    flex: 1,
    paddingHorizontal: 18,
    justifyContent: 'center',
  },
  statBorder: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
  },
  statTitle: {
    color: '#79869F',
    fontSize: 10,
    textAlign: 'center',
  },
  statContent: {
    color: '#022150',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#E9EFF1',
    marginHorizontal: 20,
    marginTop: 16,
  },
});

export default style;
