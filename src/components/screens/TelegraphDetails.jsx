import { View, ScrollView, Image } from "react-native";
import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";
import TelegraphCard from "../organisms/TelegraphCard";
import TrackOrderMap from "../screens/TrackOrderMap";
import TeleCard from "../organisms/TeleCard";
import * as ROUTES from "../../constants/routes";

const Container = styled.ScrollView`
  margin-top: 20px;
  margin-left: 50px;
  flex: 1;
`;

const Suggestion = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

const Delivery = styled(Text)`
  background-color: #ffffff;
  height: 60px;
  width: 100px;
  padding-left: 20px;
  padding-top: 20px;
  border-radius: 30px;
`;

const Pickub = styled(Text)`
  background-color: #eeeeee;
  height: 60px;
  width: 80px;
  padding-left: 10px;
  padding-top: 20px;
  border-radius: 20px;
`;

const Title = styled(Text)`
  font-size: 24px;
  margin-left: 2px;
`;

const Price = styled(Text)`
  color: #05a357;
  margin-top: 10px;
  margin-left: 2px;
`;

const Food = styled.View`
  margin-top: 30px;
  background-color: #eeeeee;
  border-radius: 40px;
`;

const foods = [
  {
    id: "0",
    title: "Cantina Crispy Chicken",
    subtitle: "Buy 1, get 1 free (add 2 to basket)",
    desc: "+",
  },
  {
    id: "1",
    title: "Cantina Crispy Chicken",
    subtitle: "Buy 1, get 1 free (add 2 to basket)",
    desc: "+",
  },
  {
    id: "2",
    title: "Cantina Crispy Chicken",
    subtitle: "Buy 1, get 1 free (add 2 to basket)",
    desc: "+",
  },
  {
    id: "3",
    title: "Cantina Crispy Chicken",
    subtitle: "Buy 1, get 1 free (add 2 to basket)",
    desc: "+",
  },
];

const note = [
  {
    id: "0",
    title: "San Francisco Bay Area",
    subtitle: "CA",
    imgUrl: require("../images/radius.png"),
  },
  {
    id: "1",
    title: "Meet at the door",
    subtitle: "Add delivery note",

    imgUrl: require("../images/Person.png"),
  },
];

const standart = [
  {
    id: 0,
    title: "Priority",
    subtitle: "Delivered directly to you",
  },
  {
    id: 1,
    title: "Standart",
  },
  {
    id: 2,
    title: "Schedule",
  },
];

const subtotal = [
  { id: 0, title: "Subtotal", price: "US$19.99" },
  {
    id: 1,
    title: "Promotion",
    price: "US$19.99",
  },
  {
    id: 2,
    title: "SDelivery fee",
    price: "US$19.99",
  },
  {
    id: 3,
    title: "Taxes & Other fees",
    price: "US$19.99",
  },
];

const Subtotal = styled(Text)``;
const Discount = styled(Text)`
  right: 15px;
`;

const Info = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

const Checkout = styled(Text)`
  margin-top: 40px;
  width: 300px;
  background-color: black;
  color: white;
  height: 50px;
  padding-left: 100px;
  padding-top: 10px;
`;

const Add = styled(Text)`
  margin-top: 20px;
  width: 300px;
  background-color: #eeeeee;
  color: black;
  height: 50px;
  padding-left: 100px;
  padding-top: 10px;
`;

const Arrow = styled.View`
  left: 300px;
  bottom: 240px;
  margin: 10px;
  display: flex;
`;

const SecondArrow = styled.View`
  left: 300px;
  bottom: 130px;
  margin: 10px;
  display: flex;
`;

const DeliveryTime = styled(Text)`
  font-size: 16px;
  color: #000000;
`;

const Deliver = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* margin-bottom: 20px; */
`;

const Schedule = styled.View`
  margin-left: 20px;
`;

const Prices = styled.View`
  display: flex;
`;

const Checkout1 = styled.Pressable``;

const TelegraphDetails = ({ navigation }) => {
  return (
    <Container>
      <Suggestion>
        <Delivery>Delivery</Delivery>
        <Pickub>Pickup</Pickub>
      </Suggestion>

      {note.map((item) => {
        return (
          <TelegraphCard
            title={item.title}
            subtitle={item.subtitle}
            desc={item.desc}
            imgUrl={item.imgUrl}
            key={item.id}
          />
        );
      })}

      <Arrow>
        <Image source={require("../images/Vector-17.png")} />
      </Arrow>
      <SecondArrow>
        <Image source={require("../images/Vector-17.png")} />
      </SecondArrow>
      <Suggestion></Suggestion>
      <Deliver>
        <DeliveryTime>DeliveryTime</DeliveryTime>
        <DeliveryTime>15-30 min(s)</DeliveryTime>
      </Deliver>
      <Schedule>
        {standart.map((item) => {
          return (
            <TelegraphCard
              title={item.title}
              subtitle={item.subtitle}
              key={item.id}
            />
          );
        })}
      </Schedule>
      <Title>Taco Bell (2255 Telegraph Avenue)</Title>
      <Price>You‘re saving US$25</Price>
      <Food>
        {foods.map((item) => {
          return (
            <TelegraphCard
              title={item.title}
              subtitle={item.subtitle}
              id={item.id}
              desc={item.desc}
              key={item.id}
            />
          );
        })}
      </Food>
      <Info>
        <Subtotal>subtotal</Subtotal>
        <Discount>US$13.18</Discount>
      </Info>
      <Info>
        <Subtotal>Request utensils, etc.</Subtotal>
        <Discount>Add note</Discount>
      </Info>
      <Prices>
        {subtotal.map((item) => {
          return (
            <TeleCard title={item.title} price={item.price} key={item.id} />
          );
        })}
      </Prices>
      <Checkout1>
        <Checkout onPress={() => navigation.navigate(ROUTES.TRACK_ORDER_MAP)}>
          Go to Checkout
        </Checkout>
      </Checkout1>
      <Add onPress={() => navigation.navigate(ROUTES.STORE_DETAILS)}>
        Add Items
      </Add>
    </Container>
  );
};

export default TelegraphDetails;
