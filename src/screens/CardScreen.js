import { View, Text, StyleSheet } from 'react-native';
import restaurants from '../../assets/data/restaurants.json';

const restaurant = restaurants[0];

const CardScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CardScreen</Text>
    </View>
  );
};

export default CardScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
  },
});
