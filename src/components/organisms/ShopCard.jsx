import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
`;
const CardImage = styled.Image``;
const InfoContainer = styled.View``;

const Icon = styled.Image``;

const Title = styled.Text``;
const Subtitle = styled.Text``;

const ShopCard = (Imgurl, title, subTitle, desc) => {
  return (
    <Container>
      <CardImage />
      <InfoContainer>
        <Title>{title}</Title>
        <Subtitle>{subTitle}</Subtitle>
        <Subtitle>{desc}</Subtitle>
      </InfoContainer>
    </Container>
  );
};

export default ShopCard;
