import { View, Image } from "react-native";
import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";

const Container = styled.View``;

const Title = styled(Text)``;
const Subtitle = styled(Text)``;

const Price = styled(Text)``;

const SafeCard = ({ imgUrl, title, subtitle, price, id }) => {
  return (
    <Container>
      <Image source={imgUrl} style={{ margin: 20 }} />
      <Title>{title}</Title>
      <Price>${price}</Price>
      <Subtitle style={{ color: "#6B6B6B" }}>{subtitle}</Subtitle>
    </Container>
  );
};

export default SafeCard;
