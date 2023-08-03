import { View, Image, TextInput } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 90px;
  margin-left: 30px;
`;

const Title = styled.TextInput`
  color: #1f5460;
  font-size: 16px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const RegisterCard = ({ imgUrl, title }) => {
  return (
    <Container>
      <Image source={imgUrl} style={{ marginTop: 5 }} />
      <Title>{title}</Title>
    </Container>
  );
};

export default RegisterCard;
