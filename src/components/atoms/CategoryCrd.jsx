import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  margin-bottom: 30px;
`;

const Title = styled.Text`
  top: 70px;
`;

const categoryCrd = ({ title, imgUrl, id }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Image source={imgUrl} />
    </Container>
  );
};

export default categoryCrd;
