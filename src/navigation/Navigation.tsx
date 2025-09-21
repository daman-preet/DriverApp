import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BotttomTabNavigation from './BotttomTabNavigation';
import Detail from '../screens/Detail';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='BotttomTabNavigation' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BotttomTabNavigation" component={BotttomTabNavigation} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
