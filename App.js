import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, SafeAreaView } from 'react-native';
import RestaurantItem from './src/components/RestaurantItem';
import restaurants from './assets/data/restaurants.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={{ gap: 10 }}
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem item={item} />}
      />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gainsboro',
  },
});
