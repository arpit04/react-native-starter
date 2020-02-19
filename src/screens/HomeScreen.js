import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
  <View>
  <Text style={styles.text}>HomeScreen</Text>
  <Button
    onPress={() => navigation.navigate('Components')}
    title='Go to the componets demo'
  />
  <Button
    onPress={() => navigation.navigate('List')}
    title='Go to the List demo'
  />
  <Button
    onPress={() => navigation.navigate('Image')}
    title='Go to the Image'
  />
  <Button
    onPress={() => navigation.navigate('Counter')}
    title='Go to the Counter demo'
  />
  <Button
    onPress={() => navigation.navigate('Color')}
    title='Go to the Color demo'
  />
  <Button
    onPress={() => navigation.navigate('Square')}
    title='Go to the Square demo'
  />
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
