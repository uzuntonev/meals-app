import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Colors from '../constants/Colors';
import HeaderButton from '../components/HeaderButton';
import FiltersScreen from '../screens/FiltersScreen';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const defaultDrawerScreenOptions = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTitleAlign: 'center',
  headerShown: false,
  drawerActiveTintColor: Colors.accentColor,
  drawerLabelStyle: {
    fontFamily: 'open-sans',
  },
};
const filtersScreenOptions = ({ navigation, route }) => {
  return {
    drawerLabel: 'Filters',
    headerShown: true,
    // eslint-disable-next-line react/no-unstable-nested-components
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    // eslint-disable-next-line react/no-unstable-nested-components
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Save'
          iconName='ios-save'
          onPress={() => {
            route.params.saveFilters();
          }}
        />
      </HeaderButtons>
    ),
  };
};
const MainDrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={defaultDrawerScreenOptions}>
        <Drawer.Screen
          name='MealsFavs'
          component={TabNavigator}
          options={{
            title: 'Meals',
          }}
        />
        <Drawer.Screen
          name='Filters'
          component={FiltersScreen}
          options={filtersScreenOptions}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainDrawerNavigator;
