import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CardScreen from '../screens/CardScreen';
import OrdersScreen from '../screens/OrdersScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import MenuItemDetailsScreen from '../screens/MenuItemDetailsScreen';
import { Foundation, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeTabs} />
      <Stack.Screen
        name='Restaurant'
        component={RestaurantDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: 'white' }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name='home' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Orders'
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='list-alt' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='user-alt' size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default RootNavigator;
