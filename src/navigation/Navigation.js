import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CardScreen from '../screens/CardScreen';
import OrdersScreen from '../screens/OrdersScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import MenuItemDetailsScreen from '../screens/MenuItemDetailsScreen';
import { Foundation, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeTabs' component={HomeTabs} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: 'white' }}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name='Home'
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name='home' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='OrdersScreen'
        component={OrdersStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='list-alt' size={24} color={color} />
          ),
          title: 'Orders',
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='user-alt' size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Restaurants' component={HomeScreen} />
      <HomeStack.Screen
        name='Restaurant'
        component={RestaurantDetailsScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name='Dish' component={MenuItemDetailsScreen} />
      <HomeStack.Screen name='Card' component={CardScreen} />
    </HomeStack.Navigator>
  );
};
const OrdersStack = createNativeStackNavigator();

const OrdersStackNavigator = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name='Orders' component={OrdersScreen} />
      <OrdersStack.Screen name='Order' component={OrderDetailsScreen} />
    </OrdersStack.Navigator>
  );
};

export default RootNavigator;
