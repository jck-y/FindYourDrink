/* eslint-disable prettier/prettier */
import {Splash, Register, Login, Home, Notification, Order, HomeDrink, Buy} from '../pages';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeDrink"
        component={HomeDrink}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Buy"
        component={Buy}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
