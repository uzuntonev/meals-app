import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MealDetailsScreen, {
  mealDetailsScreenOptions,
} from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import HeaderButton from '../components/HeaderButton';

const Stack = createNativeStackNavigator();

const favoritesScreenOptions = ({ navigation }) => {
  return {
    title: 'Your Favorites',
    headerTitleAlign: 'center',
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
  };
};

// const mealDetailsScreenOptions = ({ route }) => {
//   const { mealId, mealTitle, toggleFav, isFav } = route.params;
//   // const { title } = MEALS.find((meal) => meal.id === mealId);
//   return {
//     title: mealTitle,
//     // eslint-disable-next-line react/no-unstable-nested-components
//     headerRight: () => (
//       <HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item
//           title='Favorite'
//           iconName={isFav ? 'ios-star' : 'ios-star-outline'}
//           onPress={() => {
//             toggleFav();
//           }}
//         />
//       </HeaderButtons>
//     ),
//   };
// };

const FavoritesStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: Colors.primary,
        },
      }}>
      <Stack.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={favoritesScreenOptions}
      />
      <Stack.Screen
        name='MealDetail'
        component={MealDetailsScreen}
        options={mealDetailsScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default FavoritesStackNavigator;
