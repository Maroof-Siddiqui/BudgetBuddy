import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import ExpenseTrackerItem from '../components/ExpenseTrackerItem';
import expenseTrackerData from '../DummyData';

const Stats = () => {
  // Get transactions for the last 7 days
  const getLast7DaysTransactions = () => {
    const last7Days = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const dateString = date.toISOString().split('T')[0];
      const transactionsForDay = expenseTrackerData.flatMap((month) =>
        month.data.filter((transaction) => transaction.date.includes(dateString))
      );

      // Only add if there are transactions for the day
      if (transactionsForDay.length > 0) {
        last7Days.push({
          date: dateString,
          amount: transactionsForDay.reduce((total, transaction) => total + transaction.amount, 0),
        });
      }
    }

    return last7Days;
  };

  const last7DaysTransactions = getLast7DaysTransactions();

  // Data for the bar chart
  const barChartData = {
    labels: last7DaysTransactions.map((day) => day.date),
    datasets: [
      {
        data: last7DaysTransactions.map((day) => day.amount),
      },
    ],
    yAxisLabel: '', // You can set the label text here, e.g., 'Amount'
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Transaction Summary (Last 7 Days)</Text>
        <BarChart
          data={barChartData}
          width={Dimensions.get('window').width - 40}
          height={220}
          chartConfig={{
            backgroundGradientFrom: '#f0f0f0',
            backgroundGradientTo: '#f0f0f0',
            color: (opacity = 1) => `rgba(0, 145, 234, ${opacity})`,
            labelColor: () => '#666',
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.barChart}
          showValuesOnTopOfBars // Show values on top of bars
          yAxisSuffix=" $" // Suffix for yAxis (amount)
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Transactions for Last 7 Days</Text>
        <FlatList
          data={last7DaysTransactions}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => (
            <View style={styles.transactionDayContainer}>
              <Text style={styles.transactionDay}>{item.date}</Text>
              <FlatList
                data={expenseTrackerData.flatMap((month) =>
                  month.data.filter((transaction) => transaction.date.includes(item.date))
                )}
                keyExtractor={(item, index) => `${item.name}-${index}`}
                renderItem={({ item }) => <ExpenseTrackerItem item={item} />}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'black'
  },
  barChart: {
    marginVertical: 10,
    borderRadius: 16,
  },
  transactionDayContainer: {
    marginBottom: 10,
  },
  transactionDay: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Stats;
