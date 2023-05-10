import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Decrement from '../../screens/Decrement';
import Increment from '../../screens/Increment';
import MainScreen from '../../screens/MainScreen';
import {Screens} from '../Screens/Screens';

export type RootStackParams = {
  MainScreen: {MainScreen: Screens.MAIN_SCREEN};
  Increment: {Increment: Screens.INCREMENT};
  Decrement: {Decrement: Screens.DECREMENT};
};

const Stack = createNativeStackNavigator<RootStackParams>();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.MAIN_SCREEN}>
        <Stack.Screen name={Screens.MAIN_SCREEN} component={MainScreen} />
        <Stack.Screen name={Screens.INCREMENT} component={Increment} />
        <Stack.Screen name={Screens.DECREMENT} component={Decrement} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
