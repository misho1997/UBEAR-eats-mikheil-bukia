import { View } from "react-native";
import { RadioButton } from "react-native-paper";
import styled from "styled-components";
import Text from "../atoms/Text";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Label = styled(Text)``;

const Price = styled.Text``;

const Price1 = styled.View`
  margin-left: 150px;
`;

const RadioLabel = ({ label, price, onPress, checked, id }) => {
  return (
    <Container>
      <RadioButton
        value={checked}
        status={checked === true ? "checked" : "unchecked"}
        onPress={onPress}
        uncheckedColor="blue"
      />
      {/* <Checkbox
        value={checked}
        status={checked === true ? "checked" : "unchecked"}
        onPress={onPress}
        uncheckedColor="blue"
      /> */}

      <Label>{label}</Label>
      <Price1>
        <Price>{price}</Price>
      </Price1>
    </Container>
  );
};

export default RadioLabel;
