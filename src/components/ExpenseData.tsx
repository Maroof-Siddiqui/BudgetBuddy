import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Switch } from 'react-native';
import expenseTrackerData from '../DummyData'; // Replace with the correct path

const ExpenseData = () => {
  const [toggle, setToggle] = useState(true);

  // Function to calculate the sum of income or expense based on the toggle
  const calculateSum = (type) => {
    return expenseTrackerData.reduce((sum, month) => {
      return sum + month.data
        .filter(item => item.type === type && (!toggle || month.title === 'October 2023'))
        .reduce((itemSum, item) => itemSum + item.amount, 0);
    }, 0);
  };

  const netBalance = expenseTrackerData.reduce((sum, month) => {
    return sum + month.data
      .filter(item => !toggle || month.title === 'October 2023')
      .reduce((itemSum, item) => itemSum + item.amount, 0);
  }, 0);

  return (
    <View style={[styles.row, { flex: 1 }]}>
      <View style={styles.column}>
        <Image source={require('../assets/Expense1.png')} style={{ width: 60, height: 60 }} />
        <Text style={[styles.ExpenseData, { fontSize: 18 }]}>{toggle ? "Current month balance":"Net Balanc"}</Text>
        <Text style={styles.ExpenseData}>₹{netBalance.toFixed(2)}</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={toggle ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setToggle(!toggle)}
          value={toggle}
        />
      </View>
      <View style={styles.column}>
        <Text style={styles.ExpenseData}>Income: ₹{calculateSum('Income').toFixed(2)}</Text>
        <Text style={styles.ExpenseData}>Expense: ₹{calculateSum('Expense').toFixed(2)}</Text>
        <Text style={styles.ExpenseData}>Monthly Balance</Text>
      </View>
    </View>
  );
};

export default ExpenseData;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6dade5',
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '100%',
  },
  ExpenseData: {
    fontWeight: '500',
    color: 'black',
    fontSize: 20,
  }
});
