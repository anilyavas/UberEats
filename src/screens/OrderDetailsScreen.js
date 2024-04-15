import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import orders from '../../assets/data/orders.json';
import restaurant from '../../assets/data/restaurants.json';
import CardItem from '../components/CardItem';

const order = orders[0];

const OrderDetails = () => {
  return (
    <FlatList
      ListHeaderComponent={OrderDetailsScreen}
      data={restaurant[0].dishes}
      renderItem={({ item }) => <CardItem dishItem={item} />}
    />
  );
};
const OrderDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

      <View style={{ padding: 10 }}>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Text style={styles.fee}>{order.status} &#8226; 2 days ago</Text>
        </View>
        <Text style={styles.menuTitle}>Your orders</Text>
      </View>
    </View>
  );
};

export default OrderDetails;
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
