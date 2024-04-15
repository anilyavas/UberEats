import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import restaurants from '../../assets/data/restaurants.json';
import { useState } from 'react';

const dish = restaurants[0].dishes[0];

const MenuItemDetailsScreen = () => {
  const [quantity, setQuantity] = useState(0);

  const onMinusPressed = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const onPlusPressed = () => {
    setQuantity(quantity + 1);
  };
  const calculatePrice = () => {
    return (dish.price * quantity).toFixed(2);
  };
  const addToCard = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.seperator} />
      <View style={styles.iconContainer}>
        <AntDesign
          name='minuscircleo'
          size={60}
          color='black'
          onPress={onMinusPressed}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          name='pluscircleo'
          size={60}
          color='black'
          onPress={onPlusPressed}
        />
      </View>
      <Pressable onPress={addToCard} style={styles.button}>
        <Text style={styles.buttonText}>
          Add {quantity} items to the card &#8226; $ {calculatePrice()}
        </Text>
      </Pressable>
    </View>
  );
};

export default MenuItemDetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingVertical: 50,
    padding: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: '700',
    marginVertical: 10,
  },
  description: {
    fontSize: 20,
    color: '#696969',
  },
  seperator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
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
});
