import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Screens} from '../navigation/Screens/Screens';

function Increment() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.main}>
      <Text>You clicked {count} times</Text>
      <View style={styles.wrapper}>
        <Button
          onPress={() => setCount(prev => prev + 1)}
          title={Screens.INCREMENT}
        />
      </View>
    </View>
  );
}

// React Native Styles
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Increment;
