import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

//ColorCounter is a component
//onIncrease is a callBack function declared in SquareScreen.js, we call onIncrease from this file

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
