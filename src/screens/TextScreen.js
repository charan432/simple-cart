import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <TextInput
        value={name}
        onChangeText={newValue => setName(newValue)}
        style={styles.input}
      />
      {name.length < 5 ? (
        <Text>Password must be greater than 5 charecters</Text>
      ) : null}

      <Text>My Name is: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  }
});

export default TextScreen;
