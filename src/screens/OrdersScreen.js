import { View, Text, StyleSheet, FlatList } from 'react-native';
import orders from '../../assets/data/orders.json';
import OrderListItem from '../components/OrderListItem';

const OrdersScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

export default OrdersScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
