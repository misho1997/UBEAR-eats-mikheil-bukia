import React from "react";
import styled from "styled-components";
import { Text } from "react-native";

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 25px 0 40px;
  font-size: 10px;
`;

const Titles = styled.Text`
  color: ${({ light }) => (light ? "#55837D" : "black")};
`;

const Button = ({ title, onPress, light, ...otherProps }) => {
  return (
    <Container onPress={onPress} light={light} {...otherProps}>
      <Titles>{title}</Titles>
    </Container>
  );
};

export default Button;
