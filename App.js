import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';
import MenuItemDetailsScreen from './src/screens/MenuItemDetailsScreen';
import CardScreen from './src/screens/CardScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <CardScreen />
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
