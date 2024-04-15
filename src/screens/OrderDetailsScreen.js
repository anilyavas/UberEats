import { View, Text, StyleSheet } from 'react-native';
import orders from '../../assets/data/orders.json';

const order = orders[0];

const OrderDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>OrderDetailsScreen</Text>
    </View>
  );
};

export default OrderDetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
