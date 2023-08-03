import { View } from "react-native";
import React from "react";
import Text from "../atoms/Text";
import styled from "styled-components";
import RegisterCard from "../organisms/RegisterCard";
import Button from "../atoms/Button";
import SignIn from "../screens/SignIn";
import * as ROUTES from "../../constants/routes";

const Container = styled.View``;

const Title = styled(Text)`
  margin-top: 90px;
  margin-left: 20px;
  color: #416f71;
  font-size: 32px;
`;

const Subtitle = styled(Text)`
  margin-top: 20px;
  margin-left: 25px;
  color: #879ea4;
  font-size: 16px;
`;

const account = [
  {
    id: 0,
    imgUrl: require("../images/Account.png"),
    title: "Loki Laufeyson",
  },

  {
    id: 1,
    imgUrl: require("../images/Vector-1234567.png"),

    title: "Email address",
  },
  {
    id: 3,
    imgUrl: require("../images/Vector-12345.png"),
    title: "Password",
  },
  {
    id: 4,
    imgUrl: require("../images/Vector-12345.png"),
    title: "Confirm Password",
  },
];

const SignInBtn = styled(Button)`
  padding: 16px 24px;
  gap: 8px;
  background: #ffca42;
  width: 258px;
  border-radius: 16px;
  margin-top: 25px;
  color: white;
`;
const SignUpButton = styled.Text`
  color: blue;
  margin-left: 10px;
  margin-top: 50px;
`;

const RegisterScreen = ({ navigation }) => {
  return (
    <Container>
      <Title>Create account</Title>

      <Subtitle>Sign up to get started!</Subtitle>
      {account.map((item) => {
        return (
          <RegisterCard title={item.title} imgUrl={item.imgUrl} key={item.id} />
        );
      })}
      <SignInBtn
        title="Sign Up"
        onPress={() => navigation.navigate(ROUTES.SIGN_IN_SCREEN)}
        style={{
          marginbottom: 10,
          marginLeft: 80,
          color: "#10405A",
        }}
      />
    </Container>
  );
};

export default RegisterScreen;
