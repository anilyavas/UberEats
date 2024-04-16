import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CardScreen from '../screens/CardScreen';
import OrdersScreen from '../screens/OrdersScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import MenuItemDetailsScreen from '../screens/MenuItemDetailsScreen';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen
        name='Restaurant'
        component={RestaurantDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
