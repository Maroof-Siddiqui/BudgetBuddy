import { View, Text } from 'react-native'
import React from 'react'
import ExpenseData from '../components/ExpenseData'
import ExpenseList from '../components/ExpenseList'

const Expense = () => {
  return (
    <View style={{flex:1,flexDirection:'column'}}>
      <ExpenseData/>
      <ExpenseList/>
    </View>
  )
}

export default Expense