import styled from "styled-components";
import { useState } from "react";
import { Pressable, Text } from "react-native";

import * as ROUTES from "../../constants/routes";

import LoginScreenImage from "../images/LoginScreenImage";
import Button from "../atoms/Button";
import Screen from "../atoms/Screen";

import Snackbar from "../molecules/SnackBar";

const Container = styled(Screen)``;

const Image = styled(LoginScreenImage)`
  margin-bottom: 50px;
`;

const SignInBtn = styled(Button)`
  padding: 16px 24px;
  gap: 8px;
  background: #54924f;
  width: 258px;
  border-radius: 16px;
  margin-top: 25px;
`;

const SignUpContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

const SignUpButton = styled.Text`
  color: blue;
  margin-left: 10px;
`;

const UserName = styled.TextInput`
  height: 40px;
  border-radius: 10px;
  background-color: #edf2f4;
  width: 250px;
  padding: 0 10px;
  font-size: 17px;
  margin-bottom: 10px;
`;

const Password = styled.TextInput`
  height: 40px;
  border-radius: 10px;
  background-color: #edf2f4;

  width: 250px;
  padding: 0 10px;
  font-size: 17px;
  margin-bottom: 10px;
`;

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const InAppLoginPath = async () => {
    if (email !== "" && password !== "") {
      navigation.reset({
        index: 0,
        routes: [{ name: ROUTES.DRAWER_NAVIGATOR }],
      });
    } else {
      setError((prev) => prev);
    }
  };
  return (
    <Container>
      <Snackbar visible={error} callback={setError} text={"write something"} />

      <Image />

      <UserName
        placeholder="Email"
        onChange={(e) => setEmail(e.nativeEvent.text)}
        value={email}
      />
      <Password
        placeholder="Password"
        onChange={(e) => setPassword(e.nativeEvent.text)}
        value={password}
      />

      <SignInBtn title="Sign In" onPress={InAppLoginPath} />

      <SignUpContainer style={{ marginBottom: 20 }}>
        <Text>Forgot password?</Text>
        <Pressable
          onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD_SCREEN)}
        >
          <SignUpButton>Reset</SignUpButton>
        </Pressable>
      </SignUpContainer>

      <SignUpContainer>
        <Text>Don't have an account?</Text>
        <Pressable>
          <SignUpButton
            onPress={() => navigation.navigate(ROUTES.REGISTER_DETAILS)}
          >
            Sign Up
          </SignUpButton>
        </Pressable>
      </SignUpContainer>
    </Container>
  );
};

export default SignIn;
