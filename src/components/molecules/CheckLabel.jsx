import { View } from "react-native";
import Checkbox from "expo-checkbox";
import styled from "styled-components";
import Text from "../atoms/Text";
import { useState } from "react";
const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

const Label = styled(Text)`
  font-size: 16px;
  margin: 5px;
  color: black;
`;

const Price = styled.Text``;

const Price1 = styled.View`
  margin-left: 150px;
`;
const CheckLabel = ({ label, price, onPress, checked }) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <Container>
      {/* <RadioButton
        value={checked}
        status={checked === true ? "checked" : "unchecked"}
        onPress={onPress}
        uncheckedColor="blue"
      /> */}
      <Checkbox
        value={checked}
        status={checked === true ? "checked" : "unchecked"}
        onPress={onPress}
        uncheckedColor="green"
      />

      <Label>{label}</Label>
      <Price1>
        <Price>{price}</Price>
      </Price1>
    </Container>
  );
};
export default CheckLabel;
