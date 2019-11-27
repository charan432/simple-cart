import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const gname = <Text>Sricharan!!!</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>This is components screen page</Text>
      <Text style={styles.subHeaderStyle}>My Name is {gname}</Text>
    </View>
  );
};

//Create style for above Text
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 25
  }
});

export default ComponentsScreen;
