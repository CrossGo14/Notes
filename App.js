
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home'
import Input from './Screens/Input';

export default function main() {
const  stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Home' component={Home}  />
        <stack.Screen name = 'Input' component={Input} />

      </stack.Navigator>
    </NavigationContainer>
  )
}