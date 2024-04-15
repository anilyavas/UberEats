import { View, Text, Image, StyleSheet } from 'react-native';

const Header = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />

      <View style={{ padding: 10 }}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Text style={styles.fee}>{restaurant.deliveryFee}</Text>
          <Text style={styles.fee}>
            {restaurant.maxDeliveryTime}-{restaurant.maxDeliveryTime} minutes
          </Text>
        </View>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
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
  menuTitle: {
    marginTop: 20,
    fontSize: 18,
    letterSpacing: 0.7,
  },
});
