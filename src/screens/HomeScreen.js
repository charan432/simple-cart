import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen Welcome</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />

      <TouchableOpacity onPress={() => navigation.navigate("Lists")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>

      <Button
        title="Go to Image Screen"
        onPress={() => navigation.navigate("Images")}
      />

      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate("Counter")}
      />

      <Button
        title="Go to Colors"
        onPress={() => navigation.navigate("Color")}
      />

      <Button
        title="Go to Squares"
        onPress={() => navigation.navigate("Square")}
      />

      <Button
        title="Text Input screen"
        onPress={() => navigation.navigate("TextScreen")}
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
