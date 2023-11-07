// App.js
import React from 'react';
import { View } from 'react-native';
import AppNavigation from './src/components/AppNavigation';
import Splash from './src/screens/Splash'; // Import the Splash component
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Add the splash screen as the initial route */}
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="AppNavigation" component={AppNavigation} />
    </Stack.Navigator>
  </NavigationContainer>
  </GestureHandlerRootView>
);

export default App;
