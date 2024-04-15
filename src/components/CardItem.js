import { StyleSheet, Text, View } from 'react-native';

const CardItem = ({ dishItem }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={styles.dishName}>{dishItem.name}</Text>
      <Text style={{ marginLeft: 'auto' }}>${dishItem.price}</Text>
    </View>
  );
};

export default CardItem;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
  },
  quantityContainer: {
    backgroundColor: 'lightgrey',
    paddingHorizontal: 5,
    marginRight: 10,
    paddingVertical: 2,
    borderRadius: 3,
  },
  dishName: {
    letterSpacing: 0.5,
    fontWeight: '600',
  },
});
