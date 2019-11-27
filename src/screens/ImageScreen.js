import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <Text>This is Image Screen 11</Text>
      <ImageDetails
        title="Forest"
        imageScore={10}
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageDetails
        title="Beach"
        imageScore={20}
        imageSource={require("../../assets/beach.jpg")}
      />
      <ImageDetails
        title="Mountain"
        imageScore={50}
        imageSource={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
