import React, { useState } from "react";
import { Text, View, Button, StyleSheet, FlatList } from "react-native";

//setColors, when updated it calls the whole 'ColorScreen' process again
//...colors, creates a new random color and stores it in a array
//We are writing style in 'View', to generate style on the fly.
//Array of colors will be stored in 'colors' variable.
//We use FlatList to display all the colors from array in the page.

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      {/* <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} /> */}
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 10,
                marginBottom: 5,
                backgroundColor: randomRgb()
              }}
            />
          );
        }}
      />
    </View>
  );
};

//Helper function
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
