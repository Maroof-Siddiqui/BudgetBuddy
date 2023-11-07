import { View, Text,StyleSheet,SectionList} from 'react-native'
import React,{useEffect,useState} from 'react'
import expenseTrackerData from '../DummyData'
import ExpenseTrackerItem from './ExpenseTrackerItem'

const ExpenseList = () => {
  const [updateCount, setUpdateCount] = useState(0);

  const handleAddTransaction = () => {
    // Increment the update count to trigger a re-render
    setUpdateCount(prevCount => prevCount + 1);
  };
  return (
    <View style={[styles.MainView,{flex:3}]}>
      <SectionList
        key={`${updateCount}`} // Re-render when updateCount changes
        sections={expenseTrackerData}
        keyExtractor={(item, index) => item + String(index)}
        renderItem={({ item }) => <ExpenseTrackerItem item={item} />}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
      />
    </View>
  )
}

export default ExpenseList

const styles = StyleSheet.create({
    MainView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        width:'100%',
        height:30,
    },
    header:{
      
      color:'#932214',
      fontWeight:'500',
      fontSize:15,
      paddingLeft:10,
    }
})