import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = "hello";
  return (
    <View>
      <Text style={styles.textStyle}>This is ComponentsScreen</Text>
      <Text style={styles.subHeaderStyle}>{greeting} arpit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 30
  }
});

export default ComponentsScreen;
