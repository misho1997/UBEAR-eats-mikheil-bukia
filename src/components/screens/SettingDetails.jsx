import { View, Text, Image, Button } from "react-native";
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ImagePicker from "../atoms/ImagePicker";
import * as ImgPicker from "expo-image-picker";
import * as ROUTES from "../../constants/routes";

const Container = styled.Pressable``;

const Icon = styled.View`
  height: 90px;
  width: 90px;
  left: 143px;
  top: 101px;
  border-radius: 0px;
`;

const InnerContainer = styled.View`
  height: 22px;
  width: 108px;
  left: 17px;
  top: 310px;
`;

const Places = styled.Text`
  font-size: 18px;
`;

const Vector = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

const Home = styled.Text`
  margin-left: 10px;

  font-size: 16px;
`;

const Home2 = styled.View``;

const Add = styled.Text`
  margin-left: 10px;
`;

const Vector2 = styled.View`
  margin-top: 5px;
`;

const Otp = styled.View`
  margin-top: 450px;
  margin-left: 20px;
`;

const Sign = styled.Text`
  font-size: 20px;
`;

const Sign1 = styled.Text`
  color: green;
  font-size: 20px;
`;

const Account = styled.View`
  margin-top: 10px;
`;

const SettingDetails = ({ navigation }) => {
  const { imgUrl, setImgurl } = useState();
  return (
    <Container>
      <Icon>
        <Image source={require("../images/Ellipse-14.png")} />
        <Text style={{ fontSize: 20 }}>John Doe</Text>
        <Account>
          <ImagePicker title="EDIT ACCOUNT" />
        </Account>
      </Icon>
      <InnerContainer>
        <Places>Saved places</Places>
        <Vector>
          <Image source={require("../images/Vector-1.png")} />
          <Home2>
            <Home>Home</Home>
            <Add>add home</Add>
          </Home2>
        </Vector>
        <Vector2>
          <Vector>
            <Image source={require("../images/Business.png")} />
            <Home2>
              <Home>Work</Home>
              <Add>add Work</Add>
            </Home2>
          </Vector>
        </Vector2>
      </InnerContainer>
      <Otp>
        <Sign>Other options</Sign>
        <Sign1 onPress={() => navigation.navigate(ROUTES.SIGN_IN_SCREEN)}>
          sign out
        </Sign1>
      </Otp>
    </Container>
  );
};

export default SettingDetails;
