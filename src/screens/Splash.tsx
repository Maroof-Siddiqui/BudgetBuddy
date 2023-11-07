// Splash.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppNavigation from '../components/AppNavigation';

const { widthscreen, heightscreen } = Dimensions.get('screen');

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Navigate to 'AppNavigation' after 3 seconds
      navigation.navigate('AppNavigation');
    }, 3000);

    return () => clearTimeout(timeout); // Clear the timeout if component unmounts
  }, [navigation]);

  return (
    <View style={styles.SplashView}>
      <Text style={styles.SplashText}>BudgetBuddy -</Text>
      <Text style={styles.SplashTextSmall}>A Simple Expense Tracker</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  SplashView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SplashText: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'black'
  },
  SplashTextSmall:{
    fontSize:20,
    fontWeight:'400',
    color:'black'
  }
});
