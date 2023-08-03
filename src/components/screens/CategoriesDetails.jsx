import { View, Image } from "react-native";
import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";
import CategoryCard from "../organisms/CategoryCard";

const Container = styled.View`
  margin-top: 50px;
`;

const foods = [
  {
    id: 0,
    imgUrl: require("../images/Yougurt.png"),
    title: "Fruits & vegetables",
  },
  {
    id: 1,
    imgUrl: require("../images/Yougurt.png"),
    title: "Fruits & vegetables",
  },
  {
    id: 2,
    imgUrl: require("../images/Snack.png"),
    title: "Fruits & vegetables",
  },
  {
    id: 3,
    imgUrl: require("../images/Snack1.png"),
    title: "Fruits & vegetables",
  },
  {
    id: 4,
    imgUrl: require("../images/Foods.png"),
    title: "Fruits & vegetables",
  },
  {
    id: 5,
    imgUrl: require("../images/Frozen.png"),
    title: "Fruits & vegetables",
  },
  {
    id: 6,
    imgUrl: require("../images/Home.png"),
    title: "Fruits & vegetables",
  },
  {
    id: 7,
    imgUrl: require("../images/Ice-cream.png"),
    title: "Fruits & vegetables",
  },
  {
    id: 8,
    imgUrl: require("../images/Yougurt.png"),
    title: "Fruits & vegetables",
  },
  {
    id: 9,
    imgUrl: require("../images/Ice-cream.png"),
    title: "Fruits & vegetables",
  },
];

const CategoriesDetails = () => {
  return (
    <Container>
      {foods.map((item) => {
        return (
          <CategoryCard
            imgUrl={item.imgUrl}
            title={item.title}
            key={item.id}
            icon
          />
        );
      })}
    </Container>
  );
};

export default CategoriesDetails;
