import { View, Text } from "react-native";
import React from "react";
import * as ImgPicker from "expo-image-picker";
import styled from "styled-components";

const Container = styled.Pressable``;

const ImagePicker = ({ title, callback }) => {
  const onPressHanlder = async () => {
    const res = await ImgPicker.getMediaLibraryPermissionsAsync();
    if (res) {
      const Launches = await ImgPicker.launchImageLibraryAsync();
    } else {
      const res = await ImgPicker.requestMediaLibraryPermissionAsunc();
      console.log(Launches);
    }
  };
  return (
    <Container onPress={onPressHanlder}>
      <Text>{title}</Text>
    </Container>
  );
};

export default ImagePicker;
