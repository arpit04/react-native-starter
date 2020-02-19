import React, {useReducer} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'Red':
      return { ...state, red: state.red + action.amount };
    case 'Green':
      return { ...state, red: state.green + action.amount };
    case 'Blue':
      return { ...state, red: state.blue + action.amount };
    default:
    return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0});
  console.log(state)
  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        return;
      default:
        return;
      }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT }))}
        onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT }))}
        color='Red'
      />
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT }))}
        onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT }))}
        color='Blue'
      />
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT }))}
        onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT }))}
        color='Green'
      />
      <View style={{
        height: 150,
        width: 150,
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
