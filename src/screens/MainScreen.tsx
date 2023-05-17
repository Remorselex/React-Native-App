import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RootStackParams} from '../navigation/stack/MyStack';
import {Text, TouchableOpacity} from 'react-native';
import {Screens} from '../navigation/Screens/Screens';

function MainScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View style={styles.main}>
      <Text style={styles.headText}>Navigation</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Screens.INCREMENT, {
            Increment: Screens.INCREMENT,
          });
        }}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Screens.DECREMENT, {
            Decrement: Screens.DECREMENT,
          });
        }}>
        <Text>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headText: {
    fontWeight: '900',
  },
});

export default MainScreen;
