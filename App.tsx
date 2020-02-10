import React from 'react';
import {StyleSheet, Text} from 'react-native';

const App: React.FC = () => {
  return <Text style={styles.text}>Hello World !</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});

export default App;
