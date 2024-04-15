import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import restaurants from '../../assets/data/restaurants.json';
import CardItem from '../components/CardItem';

const restaurant = restaurants[0];

const CardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>Your Items</Text>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <CardItem dishItem={item} />}
      />
      <View style={styles.seperator} />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Create order</Text>
      </Pressable>
    </View>
  );
};

export default CardScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginVertical: 50,
    padding: 10,
  },

  name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  seperator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'black',
    marginTop: 'auto',
    padding: 20,
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  subtitle: {
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 19,
  },
});
