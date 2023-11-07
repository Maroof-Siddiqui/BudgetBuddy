import React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Expense from '../screens/Expense';
import Calender from '../screens/Calender';
import Stats from '../screens/Stats';
import Settings from '../screens/Settings';
import Transaction from '../screens/Transaction';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Tab = createBottomTabNavigator();



const TransactionButton = () =>{

  const navigation = useNavigation();

  const handleTransactionPress = () => {
    navigation.navigate('Transaction' as never);
  };

  return(
    <TouchableOpacity onPress={handleTransactionPress}>
      <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: 'blue',
        width: 50,
        height: 50,
        top: -20,
    }}
      >
        <Text>+</Text>
      </View>
    </TouchableOpacity>
  );
};

const AppNavigation = () => {
  return (
      <Tab.Navigator
      
        screenOptions={({ route }) => ({
          
          tabBarLabel: '',
          tabBarIcon: ({ focused, color, size }) => {
            let iconImagePath;
            let label = '';

            if (route.name === 'Expense') {
              iconImagePath = focused
                ? require('../assets/Expense.png')
                : require('../assets/Expense.png');
              label = route.name;
            } else if (route.name === 'Calender') {
              iconImagePath = focused
                ? require('../assets/Calender.png')
                : require('../assets/Calender.png');
                label = route.name;
            } else if (route.name === 'Stats') {
              iconImagePath = focused
                ? require('../assets/Stats.png')
                : require('../assets/Stats.png');
                label = route.name;
            } else if (route.name === 'Settings') {
              iconImagePath = focused
                ? require('../assets/Settings.png')
                : require('../assets/Settings.png');
                label = route.name;
            } else if( route.name == 'Transaction'){
              
            }

            return (
              <View style={{ alignItems: 'center',backgroundColor: focused ? '#c5ebf5':'#00000000', borderRadius:9 }}>
                <Image source={iconImagePath} style={{ tintColor: color, width: focused ? 25 : 20, height: focused ? 25 : 20 }} />
                <Text style={[{ color: color,fontSize: focused ? 16:15 }]}>{label}</Text>
              </View>
            );
          },
          activeTintColor: 'purple',
          inactiveTintColor: 'gray',
        
          
        })}
      >
        <Tab.Screen name='Expense' component={Expense} />
        <Tab.Screen name='Calender' component={Calender} />
        <Tab.Screen name='Transaction' component={Transaction} 
          options={{ tabBarButton: (props) => <TransactionButton {...props} /> }}
        />
        <Tab.Screen name='Stats' component={Stats} />
        <Tab.Screen name='Settings' component={Settings} />
      </Tab.Navigator>
    
  );
};

export default AppNavigation;
