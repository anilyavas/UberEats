import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import restaurants from '../../assets/data/restaurants.json';
import RestaurantItem from '../components/RestaurantItem';

const HomeScreen = () => {
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
