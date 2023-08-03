import { View, Image, ScrollView } from "react-native";
import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";
import SafeCard from "../organisms/SafeCard";
import * as ROUTES from "../../constants/routes";
import CategoriesDetails from "./CategoriesDetails";
import SearchScreen from "../../components/screens/SearchScreen";

const fruits = [
  {
    id: 0,
    imgUrl: require("../images/Banana.png"),
    title: "Organic Banana",
    price: "0.27",
    subtitle: "1banana",
  },
  {
    id: 1,
    imgUrl: require("../images/Avokado.png"),
    title: "Medium  Avocado",
    price: "2.21",
    subtitle: "1avokado",
  },
  {
    id: 2,
    imgUrl: require("../images/Tomato.png"),
    title: "Large tomatoes Hot House",
    price: "2.21",
    subtitle: "1avokado",
  },
];

const drinks = [
  {
    id: 0,
    imgUrl: require("../images/Cola.png"),
    title: "Coca-Cola Zero Sugar Cola Soda",
    price: "2.21",
    subtitle: "12 x 12 fl oz",
  },
  {
    id: 1,
    imgUrl: require("../images/Souce.png"),
    title: "Simply  Pulp Free OrangeJuice",
    price: "2.21",
    subtitle: "12 x 12 fl oz",
  },

  {
    id: 2,
    imgUrl: require("../images/Water.png"),
    title: "Signature Select RefreshedPurified Drinki...",
    price: "$5.49",
    subtitle: "24 x 16.9 fl oz",
  },
];

const foods = [
  {
    id: 0,
    imgUrl: require("../images/Fridays.png"),
    title: "T.G.I. Friday’s Boneless Chicken Bites",
    price: "10.44",
    subtitle: "55 fl oz",
  },
  {
    id: 1,
    imgUrl: require("../images/Apple.png"),
    title: "TApple and Maple  Froken Sausages",
    price: "10.44",
    subtitle: "45 fl oz",
  },
  {
    id: 2,
    imgUrl: require("../images/Cookie.png"),
    title: "Top Ramen  Frozen Chicken",
    price: "8.49",
    subtitle: "52 fl oz",
  },
];

const pantry = [
  {
    id: 0,
    imgUrl: require("../images/Tea.png"),
    title: "Yogi  Honey ChaiTurmeric...",
    price: "5.49",
    subtitle: "16 tea bags",
  },
  {
    id: 1,
    imgUrl: require("../images/Sugar.png"),
    title: "Pillsbury SugarfreeChocolate...",
    price: "5.49",
    subtitle: "12.4 oz",
  },
  {
    id: 2,
    imgUrl: require("../images/Cookie.png"),
    title: "PillsburyFamily Size Milk....",
    price: "5.49",
    subtitle: "18.4 oz",
  },
];

const cheese = [
  {
    id: 0,
    imgUrl: require("../images/Chedar.png"),
    title: "Open NatureVegan non- Dairy",
    price: "5.49",
    subtitle: "8 oz",
  },
  {
    id: 1,
    imgUrl: require("../images/Brie.png"),
    title: "Open NatureVegan non- Dairy",
    price: "$5.49",
    subtitle: "16 tea bags",
  },
  {
    id: 2,
    imgUrl: require("../images/Cheese.png"),
    title: "Primo Taglio Herb & GarlicBrie Cheese",
    price: "$7.70",
    subtitle: "8 oz",
  },
];

const Fruits = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 10px;
`;

const Container = styled.ScrollView`
  margin-top: 120px;
  margin-left: 20px;
`;

const Title = styled(Text)``;

const MainContianer = styled.View`
  display: flex;
  flex-direction: row;
`;

const Subtitle = styled(Text)``;

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 15px;
`;

const Drinks = styled.View`
  display: flex;
  flex-direction: row;

  margin-top: 20px;
  margin-left: 10px;
`;

const Section = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const Foods = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 18px;
`;

const Pantry = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 18px;
`;

const Cheese = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 18px;
`;

const SafeDetails = ({ navigation }) => {
  return (
    <Container>
      <MainContianer>
        <Image source={require("../images/When.png")} />
        <Title style={{ marginLeft: 10 }}>In 60 minutes</Title>
        <Image
          source={require("../images/Dollar-coin.png")}
          style={{ marginLeft: 80 }}
        />

        <Title style={{ marginLeft: 10 }}>Pricing and Fees</Title>
      </MainContianer>
      <Wrapper>
        <Subtitle
          style={{
            backgroundColor: "black",
            color: "white",
            height: 30,
            width: 90,
            borderRadius: 10,
            paddingLeft: 10,
            paddingTop: 2,
          }}
        >
          Featured
        </Subtitle>
        <Subtitle onPress={() => navigation.navigate(ROUTES.CATEGORY_DETAILS)}>
          Categories
        </Subtitle>
        <Subtitle onPress={() => navigation.navigate(ROUTES.SEARCH_DETAILS)}>
          Orders
        </Subtitle>
      </Wrapper>
      <Image
        source={require("../images/Promo.png")}
        style={{ marginTop: 40, marginLeft: 30 }}
      />
      <Section>
        <Title style={{ fontSize: 18, color: "black" }}>
          Fruits & Vegetables
        </Title>
        <Title>see all</Title>
      </Section>

      <Fruits>
        {fruits.map((item) => {
          return (
            <SafeCard
              title={item.title}
              price={item.price}
              subtitle={item.subtitle}
              imgUrl={item.imgUrl}
              key={item.id}
            />
          );
        })}
      </Fruits>
      <Section>
        <Title style={{ fontSize: 18, color: "black" }}>Drinks</Title>
        <Title>see all</Title>
      </Section>
      <Drinks style={{ marginRight: 300 }}>
        {drinks.map((item) => {
          return (
            <SafeCard
              title={item.title}
              price={item.price}
              subtitle={item.subtitle}
              imgUrl={item.imgUrl}
              key={item.id}
            />
          );
        })}
      </Drinks>
      <Section>
        <Title style={{ fontSize: 18, color: "black" }}>Frozen Foods</Title>
        <Title>see all</Title>
      </Section>
      <Foods style={{ marginRight: 300, marginLeft: 10 }}>
        {foods.map((item) => {
          return (
            <SafeCard
              title={item.title}
              price={item.price}
              subtitle={item.subtitle}
              imgUrl={item.imgUrl}
              key={item.id}
            />
          );
        })}
      </Foods>
      <Section>
        <Title style={{ fontSize: 18, color: "black" }}>
          Pantry & Groceries
        </Title>
        <Title>see all</Title>
      </Section>
      <Pantry style={{ marginRight: 300 }}>
        {pantry.map((item) => {
          return (
            <SafeCard
              title={item.title}
              price={item.price}
              subtitle={item.subtitle}
              imgUrl={item.imgUrl}
              key={item.id}
            />
          );
        })}
      </Pantry>
      <Section>
        <Title style={{ fontSize: 18, color: "black" }}>Cheese</Title>
        <Title>see all</Title>
      </Section>
      <Cheese style={{ marginRight: 300 }}>
        {cheese.map((item) => {
          return (
            <SafeCard
              title={item.title}
              price={item.price}
              subtitle={item.subtitle}
              imgUrl={item.imgUrl}
              key={item.id}
            />
          );
        })}
      </Cheese>
    </Container>
  );
};

export default SafeDetails;
