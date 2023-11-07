import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import ExpenseTrackerItem from '../components/ExpenseTrackerItem'; // Update the import path as per your folder structure
import expenseTrackerData from '../DummyData'; // Update the import path as per your folder structure
import { ScrollView } from 'react-native-gesture-handler';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDatePress = (day) => {
    // Set the selected date
    setSelectedDate(day.dateString);
  };

  // Get transactions for the selected date
  const transactionsForSelectedDate = selectedDate
    ? expenseTrackerData.reduce((acc, month) => {
        const transactionsForMonth = month.data.filter((item) => item.date.includes(selectedDate));
        return [...acc, ...transactionsForMonth];
      }, [])
    : [];

  return (
    <View style={styles.container}>
      <Calendar onDayPress={handleDatePress} />
      <View style={styles.transactionContainer}>
        <Text style={{color:"purple"}}>Transactions for {selectedDate || 'selected date'}</Text>
        <ScrollView>
        {transactionsForSelectedDate.map((transaction, index) => (
          <ExpenseTrackerItem key={index} item={transaction} />
        ))}</ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  transactionContainer: {
    marginTop: 20,
    padding: 20,
  },
});

export default CalendarScreen;
