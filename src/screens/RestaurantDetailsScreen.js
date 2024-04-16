import { View, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DishListItem from '../components/DishListItem';
import restaurants from '../../assets/data/restaurants.json';
import Header from '../components/Header';
import { useRoute } from '@react-navigation/native';

const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
  const route = useRoute();
  const id = route.params?.id;

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={({ item }) => item.id}
      />
      <Ionicons
        name='arrow-back-circle'
        size={45}
        color='white'
        style={styles.icon}
      />
    </View>
  );
};

export default RestaurantDetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
});
