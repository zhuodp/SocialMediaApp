import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import Routes from './Routes';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text, View} from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

const Tab1 = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is tab1</Text>
    </View>
  );
};

const Tab2 = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is tab2</Text>
    </View>
  );
};

const Tab3 = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is tab3</Text>
    </View>
  );
};

export const ProfileTabNavigation = () => {
  return (
    <ProfileTabs.Navigator>
      <ProfileTabs.Screen name={'Tab1'} component={Tab1} />
      <ProfileTabs.Screen name={'Tab2'} component={Tab2} />
      <ProfileTabs.Screen name={'Tab3'} component={Tab3} />
    </ProfileTabs.Navigator>
  );
};

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => null}}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{header: () => null, headerShown: true}}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
