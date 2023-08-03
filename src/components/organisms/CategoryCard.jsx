import { View, Image } from "react-native";
import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";

const icon = require("../images/Vector-18.png");

const Icon = styled.View`
  margin-left: 180px;
  display: flex;
`;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  margin: 20px;
`;

const Title = styled(Text)``;

const Section = styled.View``;

const CategoryCard = ({ imgUrl, title, icon, id }) => {
  return (
    <Container>
      <Image source={imgUrl} />
      <Section>
        <Title style={{ marginLeft: 10 }}>{title} </Title>
      </Section>
      <Icon>{icon && <Image source={icon} />}</Icon>
    </Container>
  );
};

export default CategoryCard;
