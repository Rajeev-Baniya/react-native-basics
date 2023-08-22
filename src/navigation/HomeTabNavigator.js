import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import Fontisto from 'react-native-vector-icons/Fontisto';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ExportNavigator from './ExploreNavigator';
import PostScreen from '../screens/PostScreen';
import SavedScreen from '../screens/Saved';
import SearchResultScreen from '../screens/SearchResults';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingBottom: 8,
          height: 60,
          paddingTop: 8,
        },
        tabBarActiveTintColor: 'red',
        headerShown: false,
      }}>
      <Tab.Screen
        name={'Explore'}
        component={ExportNavigator}
        // component={PostScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={'Saved'}
        component={SavedScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="heart" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={'Airbnb'}
        component={SearchResultScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="airbnb" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={'Messages'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={'Profile'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <EvilIcons name="user" size={29} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
