import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Decrement from './Decrement';
import Increment from './Increment';
import SomeEl from './SomeEl';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Decrement"
          component={Decrement}
          options={{title: 'Decrement'}}
        />
        <Stack.Screen
          name="Increment"
          component={Increment}
          options={{title: 'Increment'}}
        />
        <Stack.Screen
          name="SomeEl"
          component={SomeEl}
          options={{title: 'SomeEl'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
