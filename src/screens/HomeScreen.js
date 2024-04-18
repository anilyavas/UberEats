import { View, FlatList, StyleSheet } from 'react-native';
import RestaurantItem from '../components/RestaurantItem';
import { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';

const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    const results = await DataStore.query(Restaurant);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        contentContainerStyle={{ gap: 10 }}
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem item={item} />}
      />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  page: {},
});
