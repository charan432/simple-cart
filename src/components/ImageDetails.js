import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";

const ImageDetails = props => {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
      <Text>Image Score: {props.imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetails;
