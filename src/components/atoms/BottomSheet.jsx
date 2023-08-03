import { View, Text } from "react-native";

import React from "react";
import { Modalize } from "react-native-modalize";
import styled from "styled-components";

const Container = styled(Modalize)``;

const BottomSheet = ({ bottomSheetRef, children }) => {
  return <Container ref={bottomSheetRef}>{children}</Container>;
};

export default BottomSheet;
