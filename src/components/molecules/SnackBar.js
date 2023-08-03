import React, { useEffect } from "react";
import { LogBox } from "react-native";
import Constants from "expo-constants";
import SnackBar from "react-native-snackbar-component";
import styled from "styled-components/native";
import Text from "../atoms/Text";
const NOTIFICATION_DISMIS_TIME = 3000;
const SnackBox = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 16px;
`;
const InfoBox = styled.View`
  margin-left: 15px;
`;
const AppSnackBar = (props) => {
  const { text, isError, visible = false, callBack } = props;
  useEffect(() => {
    LogBox.ignoreLogs(["Animated:`useNativeDriver`"]);
  }, []);
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        callBack((prev) => !prev);
      }, NOTIFICATION_DISMIS_TIME);
    }
  }, [visible]);
  const Message = () => {
    return (
      <SnackBox>
        <InfoBox>
          <Text>{isError ? "Success" : "Error"}</Text>
          <Text>{text}</Text>
        </InfoBox>
      </SnackBox>
    );
  };
  return (
    <SnackBar
      useNativeDriver={true}
      visible={visible}
      backgroundColor="#E10002"
      messageColor="#F2F2F2"
      textMessage={Message}
      messageStyle={{ fontFamily: "medium" }}
      position="top"
      top={Constants.statusBarHeight - 8}
      containerStyle={{
        borderRadius: 12,
      }}
    />
  );
};
export default AppSnackBar;
