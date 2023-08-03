import { View, Image, ScrollView } from "react-native";
import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";
import StoreCard from "../organisms/StoreCard";
import * as ROUTES from "../../constants/routes";
import SafeDetails from "./SafeDetails";

const Container = styled.ScrollView``;

const MainContainer = styled.Pressable`
  margin-top: 100px;
  margin-left: 50px;
  display: flex;
`;
const Title = styled(Text)``;
const Subtitle = styled(Text)``;

const Radius = styled.View``;

const SafeWay = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 10px;
`;

const StoreDetails = ({ navigation }) => {
  const data = [
    {
      id: 0,
      shopName: "Come See",
      logo: require("../images/Element.png"),
      color: "#F60000",
      delivery: 45,
      handlePress: () => navigation.navigate(ROUTES.SAFE_DETAILS),
    },
    {
      id: 1,
      shopName: "Glacier",
      logo: require("../images/Andronicos.png"),
      color: "#77A240",
      delivery: 35,
    },
    {
      id: 2,
      shopName: "K.kong Saurma",
      logo: require("../images/Cardenas.png"),
      color: "#E4AE3C",
      delivery: 25,
    },
    {
      id: 3,
      logo: require("../images/Safewaylogo.png"),
      color: "#E4AE3C",
      delivery: 59,
    },
    {
      id: 4,
      logo: require("../images/Smart-final.png"),
      color: "#E4AE3C",
      delivery: 55,
    },
    {
      id: 5,
      logo: require("../images/Safewaylogo.png"),
      color: "#E4AE3C",
      delivery: 47,
    },
  ];

  return (
    <Container>
      <MainContainer>
        <Title>San Francisco Bay Area</Title>
        <Subtitle style={{ color: "#6B6B6B" }}>John’s List</Subtitle>
        <Radius>
          <Image
            source={require("../images/radius.png")}
            style={{ right: 40, bottom: 40 }}
          />
        </Radius>
      </MainContainer>
      <SafeWay>
        {data.map((item) => {
          return (
            <StoreCard
              imgUrl={item.logo}
              key={item.id}
              color={item.color}
              delivery={item.delivery}
              onPress={item.handlePress}
            />
          );
        })}
      </SafeWay>
    </Container>
  );
};

export default StoreDetails;
