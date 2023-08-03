import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.View`
  margin: 10px;
  display: flex;
  flex-direction: row;
`;

const Title = styled.Text`
  font-size: 16px;
`;

const SearchCard = ({ imgUrl, title, id }) => {
  return (
    <Container>
      <Image source={imgUrl} style={{ marginTop: 5, marginLeft: 15 }} />
      <Title style={{ marginLeft: 25, color: "#000000" }}>{title}</Title>
    </Container>
  );
};

export default SearchCard;
