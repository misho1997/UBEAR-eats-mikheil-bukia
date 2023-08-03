import { View, Image } from "react-native";
import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";

const Container = styled.Pressable`
  /* display: flex;
  flex-direction: column;
  flex: 1; */
`;

const Title = styled(Text)`
  font-size: 16px;
  color: #000000;
  background-color: #eeeeee;
`;

const Subtitle = styled(Text)`
  font-size: 14px;
  color: green;
`;

const Desc = styled(Text)`
  width: 10px;
  bottom: 16px;
  left: 309px;
`;

const InfoContainer = styled.View`
  margin-top: 40px;
`;

const Images = styled.View``;

const DescWidth = styled.View``;

const Price = styled(Text)``;

const MainContainer = styled.View``;

const TelegraphCard = ({ title, subtitle, imgUrl, desc, price, id }) => {
  return (
    <Container>
      <InfoContainer>
        <MainContainer>
          <Text>{title}</Text>
          <Price>{price}</Price>
        </MainContainer>

        <Subtitle>{subtitle}</Subtitle>
      </InfoContainer>
      <Images>
        <Image source={imgUrl} />
      </Images>
      <DescWidth>
        <Desc>{desc}</Desc>
      </DescWidth>
    </Container>
  );
};

export default TelegraphCard;
