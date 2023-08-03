import { View } from "react-native";
import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";

const Container = styled.View``;

const Title = styled(Text)`
  color: #6b6b6b;
`;
const Price = styled(Text)``;
const MainContainer = styled.View`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TeleCard = ({ title, price }) => {
  return (
    <Container>
      <MainContainer>
        <Title>{title}</Title>
        <Price>{price}</Price>
      </MainContainer>
    </Container>
  );
};

export default TeleCard;
