import React, { useState } from "react";
import { ScrollView, Pressable } from "react-native-gesture-handler";
import styled from "styled-components";
import Text from "../atoms/Text";
import PromotionWidget from "../molecules/PromotionWidget";
import RadioLabel from "../molecules/RadioLabel";
import { Image } from "react-native";
import CheckLabel from "../molecules/CheckLabel";
import TelegraphDetails from "../screens/TelegraphDetails";
import * as ROUTES from "../../constants/routes";

const sauces = [
  {
    id: 0,
    value: 1,
    label: "mariana souce",
  },
  {
    id: 1,
    value: 1,
    label: "Garlicky Sauce",
  },
  {
    id: 2,
    value: 1,
    label: "Pesto Sauce",
  },
  {
    id: 3,
    value: 1,
    label: "BBQ Sauce",
  },
  {
    id: 4,
    value: 1,
    label: "Buffalo Sauce",
  },
];

const sauce = [
  {
    id: 0,
    isChecked: "false",
    price: "15.0USD",
    label: "Small 10” (6 Slices)",
  },
  {
    id: 1,
    isChecked: "false",
    price: "30.0USD",
    label: "Large 14” (8 Slices)",
  },
  {
    id: 2,
    isChecked: "false",
    price: "40.0USD",
    label: "Extra large(8 Scles)",
  },
  {
    id: 3,
    isChecked: "false",
    price: "15.0USD",
    label: "Super 20”(8 Slices) ",
  },
  {
    id: 4,
    isChecked: "false",
    // price: "15.0USD",
    label: "24",
  },
];

const crust = [
  { id: 0, price: "15.0USD", label: "Regular Skin Crust” " },
  { id: 1, price: "60.0USD", label: "Corn Skinny Crust” " },
  { id: 2, price: "80.0USD", label: "Thick Panny Crust” " },
];

const crust1 = [
  {
    id: 0,
    price: "15.0USD",
    label: "1 Side of Ranch dres",
  },
  {
    id: 1,
    price: "25.0USD",
    label: "Side of Ranch Dress ",
  },
  { id: 2, price: "30.0USD", label: "Thick Pannny Crust” " },
];

const crust2 = [
  {
    id: 0,
    // price: "15.0USD",
    label: "soda",
  },
  {
    id: 1,
    // price: "25.0USD",
    label: "Cheeze pizza ",
  },
  {
    id: 2,
    //  price: "30.0USD",
    label: "Thick Pannny Crust” ",
  },
];

const Container = styled.View`
  margin-top: 40px;
  margin-left: 20px;
`;

const RestauranTitle = styled(Text)``;

const ItemPrice = styled(Text)`
  margin: 8px 0;
`;

const ItemDesc = styled(Text)`
  color: #495445;
`;

const Promotion = styled(PromotionWidget)`
  margin-top: 36px;
`;

const SauceContainer = styled.Pressable`
  margin-top: 20px;
`;

const Size = styled(Text)``;
const Required = styled(Text)`
  color: #6b6b6b;
`;

const Info = styled.View`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Slices = styled.View`
  display: flex;
`;

const Required2 = styled(Text)``;

const Crust = styled(Text)``;

const Choose = styled.View`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Choose3 = styled(Text)``;

const Choose4 = styled(Text)`
  font-size: 14px;
  color: #545454;
`;

const Choose5 = styled.View`
  margin-top: 20px;
`;

const Frequently = styled(Text)`
  font-size: 20px;
  margin-top: 15px;
`;

const Two = styled(Text)`
  width: 45px;
  height: 45px;
`;

const Count = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-left: 150px;
`;

const Minus = styled.View`
  /* margin-right: 10px; */
`;

const Basket = styled(Text)`
  color: white;
  background-color: black;
  margin-left: 70px;
  margin-right: 50px;
  height: 20px;
  width: 260px;
`;

const Basket1 = styled.Pressable`
  margin-top: 20px;
  margin-bottom: 30px;
`;

const OrderDetails = ({ route, navigation }) => {
  const { restaurantName, price, desc } = route.params;

  const [count, setCount] = useState(parseInt(price));
  const [sizeArr, setSizeArr] = useState(sauce);
  const [isChecked, setChecked] = useState(true);
  console.log(count);
  const handlePress = (id, amount) => {
    let num = parseInt(price);

    setCount(num + amount ? amount : 0);
    sizeArr.forEach((item) => {
      if (item.id !== id) {
        item.isChecked = false;
      } else {
        item.isChecked = true;
      }
    });
  };
  const [crustArr, setCrustArr] = useState(crust);

  const handlePresses = (id, amount) => {
    setCount(parseInt(price));
    setCount((count) => (count + amount ? amount : 0));
    crustArr.forEach((item) => {
      if (item.id !== id) {
        item.isChecked = false;
      } else {
        item.isChecked = true;
      }
    });
  };

  return (
    <Container>
      <ScrollView>
        <RestauranTitle size={24}>{restaurantName}</RestauranTitle>
        <ItemPrice size={22}>{price}</ItemPrice>
        <ItemDesc>{desc}</ItemDesc>
        <Promotion />
        <SauceContainer onPress={() => console.log("mishoo")}>
          {sauces.map((item) => {
            return <RadioLabel label={item.label} key={item.id} />;
          })}
        </SauceContainer>
        <Info>
          <Size>Choose your size</Size>
          <Required>Required</Required>
        </Info>
        <Slices>
          {sizeArr.map((item) => {
            return (
              <RadioLabel
                label={item.label}
                price={item.price}
                key={item.id}
                onPress={() => handlePress(item.id, item.price)}
                checked={item.isChecked}
              />
            );
          })}
          <Text>{count}</Text>
        </Slices>
        <Choose>
          <Crust>Choose your crust</Crust>
          <Required2>Required</Required2>
        </Choose>
        {crustArr.map((item) => {
          return (
            <RadioLabel
              label={item.label}
              price={item.price}
              key={item.id}
              onPress={() => handlePresses(item.id, item.price)}
              checked={item.isChecked}
            />
          );
        })}
        <Choose5>
          <Choose3>Choose your add-ons</Choose3>
          <Choose4>Choose up to 3</Choose4>
        </Choose5>
        {crust1.map((item) => {
          return (
            <CheckLabel
              label={item.label}
              price={item.price}
              key={item.id}
              checked={item.isChecked}
            />
          );
        })}
        <Frequently>Frequently brought together</Frequently>
        {crust2.map((item) => {
          return (
            <CheckLabel
              label={item.label}
              price={item.price}
              key={item.id}
              onPress={() => handlePresses(item.id, item.price)}
              checked={item.isChecked}
            />
          );
        })}
        <Count>
          <Minus>
            <Two>-</Two>
          </Minus>
          <Two>2</Two>
          <Two>+</Two>
        </Count>
        <Basket1 onPress={() => navigation.navigate(ROUTES.TELEGRAPH_DETAILS)}>
          <Basket style={{ borderRadius: 10 }}>
            Add 2 to basket US$16.99 US$21.00
          </Basket>
        </Basket1>
      </ScrollView>
    </Container>
  );
};

export default OrderDetails;
