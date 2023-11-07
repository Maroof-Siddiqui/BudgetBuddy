import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import firestore, { firebase } from '@react-native-firebase/firestore';
import { initializeApp } from '@firebase/app';
import { Picker } from '@react-native-picker/picker';

const Transaction = () => {
  const [monthYear, setMonthYear] = useState('');
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

useEffect(() =>{
  getData();
},[]);

const getData =async() =>{
  await firebase.initializeApp();
  
  try {
    const data = await firestore().collection("ExpenseData").doc("s8B9Qr4TlxlnhCcFU25U").get();
    console.log(data);

  } catch (err) {
    console.log(err)
    
  }
}

  const fetchAllData = async () => {
    const collectionRef = firestore().collection('YourCollectionName');
  
    try {
      const querySnapshot = await collectionRef.get();
  
      const data = [];
      querySnapshot.forEach((doc) => {
        if (doc.exists) {
          data.push({ id: doc.id, ...doc.data() });
        }
      });
  
      console.log('All Data:', data);
      return data;
    } catch (error) {
      console.error('Error fetching data: ', error);
      return [];
    }
  };

  const handleAddTransaction = async () => {
    const newTransaction = {
      type,
      name,
      description,
      amount: parseFloat(amount),
      date,
    };

    const collectionRef = firestore().collection('ExpenseData');
    console.log()
    try {
      const doc = await collectionRef.doc(monthYear).get();
      if (doc.exists) {
        await collectionRef.doc(monthYear).update({
          data: [...doc.data().data, newTransaction],
        });
      } else {
        await collectionRef.doc(monthYear).set({
          title: monthYear,
          data: [newTransaction],
        });
      }
      console.log('Transaction added successfully!');
    } catch (error) {
      console.error('Error adding transaction: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Month and Year (e.g., October 2023)"
        value={monthYear}
        onChangeText={(text) => setMonthYear(text)}
        placeholderTextColor={"grey"}
      />
      <TextInput
        style={styles.input}
        placeholder="Type (Expense/Income)"
        value={type}
        onChangeText={(text) => setType(text)}
        placeholderTextColor={"grey"}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        placeholderTextColor={"grey"}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
        placeholderTextColor={"grey"}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={(text) => setAmount(text)}
        placeholderTextColor={"grey"}
        keyboardType='numeric'
      />
      <TextInput
        style={styles.input}
        placeholder="Date (e.g., 2023-09-30T15:00:00Z)"
        value={date}
        onChangeText={(text) => setDate(text)}
        placeholderTextColor={"grey"}
      />

      <TouchableOpacity style={styles.button} onPress={getData}>
        <Text style={styles.buttonText}>Add Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    color:'black'
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Transaction;
