import { View, Text, Image, Button } from "react-native";
import React from "react";
import styled from "styled-components";
import Screen from "../../components/atoms/Screen";
import CtgrBtn from "../atoms/CtgrBtn";
import * as ROUTES from "../../constants/routes";

const ImageUrl = require("../images/Vector-7.png");

const Container = styled(Screen)``;

const InnerContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 30px;
  color: #000000;
`;

const Subtitle = styled.Text`
  padding: 10px;
  font-size: 20px;
`;

const StartBtn = styled(CtgrBtn)`
  border-radius: 10px;
  margin-top: 20px;
`;
const OrderBtn = styled(CtgrBtn)`
  margin-top: 10px;
  border-radius: 10px;
  right: 20px;
  bottom: 590px;
  position: absolute;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
`;

const Maintitle = styled.Text`
  font-size: 40px;
  margin-right: 270px;
  color: #000000;
`;

const Shop = ({ navigation }) => {
  return (
    <Container>
      <InnerContainer>
        <Maintitle>Carts</Maintitle>
        <Image source={require("../images/Carts-1.png")} />
        <Title>Add items to start a basket</Title>
        <Subtitle>
          Once you add items from a restuarant or store, your basket will appear
          here.
        </Subtitle>
        <StartBtn
          title="Start Shopping"
          onPress={() => navigation.navigate(ROUTES.SAFE_DETAILS)}
        />
        <OrderBtn title="Orders" light icon={ImageUrl} />
      </InnerContainer>
    </Container>
  );
};

export default Shop;
