import React from "react";
import styled from "styled-components";

const Txt = styled.Text`
  font-family: ${({ type }) => {
    switch (type) {
      case "Bold":
        return "UberMove";
      case "Medium":
        return "UberMoveBold";
    }
  }};
  font-size: ${({ size }) => (size ? size : 16)}px;
`;

const Text = ({ children, type = "Bold", size, ...otherProps }) => (
  <Txt type={type} size={size} {...otherProps}>
    {children}
  </Txt>
);

export default Text;
