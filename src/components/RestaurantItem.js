import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RestaurantItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('Restaurant', { id: item.id })}
      style={styles.container}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{item.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              padding: 5,
              gap: 10,
            }}
          >
            <Text style={styles.fee}>{item.deliveryFee}</Text>
            <Text style={styles.deliveryTime}>
              {item.minDeliveryTime}-{item.maxDeliveryTime} min
            </Text>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantItem;
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  fee: {
    color: 'grey',
  },
  deliveryTime: {
    color: 'grey',
  },
  rating: {
    fontSize: 14,
    fontWeight: '500',
    padding: 5,
  },
  ratingContainer: {
    backgroundColor: 'darkgrey',
    borderRadius: 10,
  },
});
