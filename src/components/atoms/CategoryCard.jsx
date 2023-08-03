import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  height: 90px;
  width: 90px;
`;

const ImageContainer = styled.View`
  height: 75px;
  width: 75px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CtgrImage = styled.Image``;

const Ctgr = styled.Text``;

const CategoryCard = ({ onPress, imgUrl, title }) => {
  return (
    <Container onPress={onPress}>
      <ImageContainer>
        <CtgrImage source={imgUrl}></CtgrImage>
      </ImageContainer>
      <Ctgr>{title}</Ctgr>
    </Container>
  );
};

export default CategoryCard;
