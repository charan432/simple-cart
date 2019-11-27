import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  //Create an array of objects to show in FlatList
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
    { name: "Friend #8" }
  ];

  const efriends = [
    { name: "eFriend #1", age: 20 },
    { name: "eFriend #2", age: 30 },
    { name: "eFriend #3", age: 40 },
    { name: "eFriend #4", age: 50 },
    { name: "eFriend #5", age: 60 }
  ];

  return (
    <FlatList
      keyExtractor={efriend => efriend.name}
      data={efriends}
      renderItem={({ item }) => {
        return (
          <Text>
            {item.name} - Age: {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10
  }
});

export default ListScreen;
