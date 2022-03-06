import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailsScreen, {
  mealDetailsScreenOptions,
} from '../screens/MealDetailScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';

const Stack = createNativeStackNavigator();

const defaultScreenOptions = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
};

const categoriesScreenOptions = ({ navigation }) => {
  return {
    title: 'Meal Categories',
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

const categoryMealsScreenOptions = ({ route }) => {
  const { title } = CATEGORIES.find(
    (cat) => cat.id === route.params.categoryId
  );
  return {
    title,
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

const MealsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name='Categories'
        component={CategoriesScreen}
        options={categoriesScreenOptions}
      />
      <Stack.Screen
        name='CategoryMeals'
        component={CategoryMealScreen}
        options={categoryMealsScreenOptions}
      />
      <Stack.Screen
        name='MealDetail'
        component={MealDetailsScreen}
        options={mealDetailsScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default MealsStackNavigator;
