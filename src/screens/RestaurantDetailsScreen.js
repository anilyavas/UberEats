import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import restaurants from '../../assets/data/restaurants.json';

const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.iconContainer}>
        <Ionicons name='arrow-back-circle' size={45} color='white' />
      </View>
      <View style={{ padding: 10 }}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Text style={styles.fee}>{restaurant.deliveryFee}</Text>
          <Text style={styles.fee}>
            {restaurant.maxDeliveryTime}-{restaurant.maxDeliveryTime} minutes
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RestaurantDetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  iconContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
  name: {
    fontSize: 35,
    fontWeight: '600',
    marginVertical: 10,
  },
  fee: {
    color: '#525252',
    fontSize: 15,
  },
});
