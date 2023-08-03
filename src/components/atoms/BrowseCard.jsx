import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

const TopContanier = styled.Pressable``;

const CardImage = styled.Image``;

const Title = styled.Text``;

const BrowseCard = ({ title, imgUrl, id, onPress }) => {
  return (
    <TopContanier onPress={onPress}>
      <CardImage source={imgUrl} style={{ marginRight: 15 }} />
      <Title style={{ marginBottom: 40 }}>{title}</Title>
    </TopContanier>
  );
};

export default BrowseCard;
