import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ExpenseTrackerItem = ({ item }) => {
  const { type, name, description, amount } = item;

  const imageUrls = {
    Rent: 'https://d17kpcthhpu5tq.cloudfront.net/wp-content/uploads/2021/12/rent.png',
    Food: 'https://cdn-icons-png.flaticon.com/512/4080/4080032.png',
    Salary: 'https://cdn-icons-png.flaticon.com/512/3135/3135706.png',
    Other: 'https://static.vecteezy.com/system/resources/previews/019/787/018/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png',
    // Add a default URL for unknown names
    default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfiO3Y9R46ICtg4sF_2ZaMtRT3hYEmW0PUxA&usqp=CAU',
  };

  // Get the image URL based on the name or use the default URL
  const imageUrl = imageUrls[name] || imageUrls.default;

  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftSide}>
        <Image style={styles.nameImage} source={{ uri: imageUrl }} />
        <View style={styles.nameDataContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.data}>{description}</Text>
        </View>
      </View>
      <View style={styles.rightSide}>
      <Text style={[styles.amount, { color: amount < 0 ? 'red' : 'green' }]}>
  {amount}
</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  nameImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  nameDataContainer: {
    flexDirection: 'column',
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
  },
  data: {
    color: 'black',
  },
  rightSide: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  amount: {
    color: 'green',
    fontWeight: 'bold',
  },
});

export default ExpenseTrackerItem;
