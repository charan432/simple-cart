import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

//SquareScreen is a main screen
//ColorCounter is a component
//onIncrease is a call back function called from colorCounter
//We are incrementing or decrementing the values by 15 each time the function is called
const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(red);
  //Define constant variable for color increment
  COLOR_INCREMENT = 15;

  //Helper function to validate the setRed function, so that value should not be lessthan 0 & greater thean 255
  const setColor = (color, change) => {
    //color == red, blue, green
    //change == =15, -15
    if (color === "red") {
      if (red + parseInt(change) > 255 || red + parseInt(change) < 0) {
        return;
      } else {
        setRed(red + parseInt(change));
      }
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOR_INCREMENT)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
