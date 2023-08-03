import { View, Text, Button, Image } from "react-native";
import React from "react";
import styled from "styled-components";
import CtgrBtn from "../atoms/CtgrBtn";
import SearchFilter from "../screens/SearchFilter";
const Container = styled.ScrollView`
  margin-top: 100px;
  /* display: flex;
  flex-direction: row;
  margin-left: 20px;  */
`;

const MainContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`;

const Title = styled.Text`
  color: #000000;
  font-size: 20px;
  margin-left: 160px;
  margin-bottom: 60px;
`;

const Maintitle = styled.View`
  display: flex;
  flex-direction: row;
  right: 160px;

  margin-top: 60px;
  justify-content: space-between;
`;

const Offers = styled.Text`
  font-size: 20px;
  /* margin-left: 0px;
  padding-right: 50px; */
  margin-right: 80px;
  /* margin-left: 10px; */
`;
const Reward = styled.Text`
  font-size: 20px;
  /* margin-left: 60px; */
  /* margin-right: 100px; */
`;

const Images = styled.View`
  display: flex;
  flex-direction: column;
  margin: 35px;
`;

const Title1 = styled.Text``;
const Price1 = styled.Text``;

const Title2 = styled.Text``;
const Price2 = styled.Text``;

const Title3 = styled.Text``;
const Price3 = styled.Text``;

const Deals = () => {
  return (
    <Container>
      <SearchFilter />
      <MainContainer>
        <Image source={require("../images/Vector-3.png")} />
        <Title>Deals</Title>
        <Maintitle>
          <Image source={require("../images/Vector-4.png")} />
          <Offers>Offers</Offers>
          <Image source={require("../images/Vector-7.png")} />
          <Reward>Reward</Reward>
        </Maintitle>
      </MainContainer>
      <Images>
        <Image source={require("../images/Burger-1.png")} />
        <Title1>Papos Burgers</Title1>
        <Price1>$0.35 Delivery Fee 30-35 min</Price1>
        <Image source={require("../images/pizza-5.png")} />
        <Title2>Zizza Italiano</Title2>
        <Price2>$0.35 Delivery Fee 30-35 min</Price2>
        <Image source={require("../images/potato-10.png")} />
        <Title3>Zizzy and Friends</Title3>
        <Price3>$0.35 Delivery Fee 30-35 min</Price3>
        <Image source={require("../images/potato-10.png")} />
        <Title3>Zizzy and Friends</Title3>
        <Price3>$0.35 Delivery Fee 30-35 min</Price3>
        <Image source={require("../images/pizza-5.png")} />
        <Title3>Zizzy and Friends</Title3>
        <Price3>$0.35 Delivery Fee 30-35 min</Price3>
      </Images>
    </Container>
  );
};

export default Deals;
