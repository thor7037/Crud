import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from '../Screens/List/index';
import { ROUTE_NAME } from '../Constants/RouteName';
import  Create  from '../Component/Create';
import DetailScreen from '../Screens/DetailScreen/DetailScreen';

const MainStack=()=> {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        name="List"
        component={List}
        options={{ headerShown: false }}
      />
      <Stack.Screen
      name="Create"
      component={Create}
      />
      <Stack.Screen
      name="DetailScreen"
      component={DetailScreen}
      />


    </Stack.Navigator>
  );
}
export default MainStack