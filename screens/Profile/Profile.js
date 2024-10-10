import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import globalStyle from '../../assets/style/globalStyle';
import style from './style';

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image style={style.profileImage} />
          </View>
        </View>
        <View style={style.userNameContainer}>
          <Text style={style.userName}>Emmanuel Robesten</Text>
        </View>

        <View style={style.profileStatsContainer}>
          <View style={[style.profileStat, style.statBorder]}>
            <Text style={style.statContent}>45</Text>
            <Text style={style.statTitle}>Following</Text>
          </View>
          <View style={[style.profileStat, style.statBorder]}>
            <Text style={style.statContent}>30M</Text>
            <Text style={style.statTitle}>Followers</Text>
          </View>
          <View style={style.profileStat}>
            <Text style={style.statContent}>100</Text>
            <Text style={style.statTitle}>Posts</Text>
          </View>
        </View>
        <View style={style.divider} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
