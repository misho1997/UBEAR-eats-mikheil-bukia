import React from "react";
import { Image } from "react-native";
import styled from "styled-components";

const Container = styled.Pressable`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ light }) => (light ? `background - color : #000000` : "")};
  background-color: ${({ light }) => (light ? `#EEEEEE` : "#000000")};
`;

const Title = styled.Text`
  color: ${({ light }) => (light ? "#000000" : "#FFFFFF")};
  font-size: 16px;
`;

const CtgrBtn = ({ title, onPress, light = false, icon, ...otherProps }) => {
  return (
    <Container onPress={onPress} light={light} {...otherProps}>
      {icon && <Image source={icon} />}
      <Title light={light}>{title}</Title>
    </Container>
  );
};

export default CtgrBtn;
