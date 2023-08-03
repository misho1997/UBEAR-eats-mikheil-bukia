import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";
// import { FlipInEasyX } from "react-native-reanimated";
const CardBox = styled.Pressable`
  ${({ color }) => (color ? `background-color: ${color}` : "")}

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 12px;
  padding-top: 35px;
  margin-top: 20px;
`;
const ImageBox = styled.View`
  width: 120px;
  height: 57px;
  margin: 0 23px;
`;
const TextBox = styled.View`
  width: 109px;
  height: 30px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000045;
  margin: 30px 29px 20px 29px;
`;
const CarDText = styled.Text`
  color: #ffffff;
`;

const StoreCard = ({ color, imgUrl, onPress, delivery }) => {
  return (
    <CardBox color={color} onPress={onPress}>
      <ImageBox>
        <Image source={imgUrl} />
      </ImageBox>
      <TextBox>
        <CarDText>In {delivery} minutes</CarDText>
      </TextBox>
    </CardBox>
  );
};
export default StoreCard;
