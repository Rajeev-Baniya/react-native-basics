import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';

const Tab = createMaterialTopTabNavigator();
const SearchResultsTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          //   backgroundColor: '#f15454',
        },
        tabBarActiveTintColor: 'red',
        tabBarIndicatorStyle: {
          backgroundColor: 'red',
        },
      }}>
      <Tab.Screen name={'list'} component={SearchResults} />
      <Tab.Screen name={'map'} component={SearchResults} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
