import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import FavoritesStackNavigator from './FavoritesStackNavigator';
import MealsStackNavigator from './MealsStackNavigator';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarStyle: { backgroundColor: Colors.primary },
        headerShown: false,
        tabBarLabelStyle: { fontFamily: 'open-sans-bold' },
      }}>
      <Tab.Screen
        name='Meals'
        component={MealsStackNavigator}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-restaurant' color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={FavoritesStackNavigator}
        options={{
          tabBarLabel: 'Favorites',
          // tabBarStyle: { backgroundColor: Colors.accentColor },
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-star' color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
