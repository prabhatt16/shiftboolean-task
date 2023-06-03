import {View, Text} from 'react-native';
import React from 'react';
import MainScreen from './src/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import MainScreenItem from './src/MainScreenItem';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={MainScreen} name='mainscreen'></Stack.Screen>
        <Stack.Screen component={MainScreenItem} name='mainscreenitem'></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
