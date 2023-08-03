import MainNavigator from "./navigator/MainNavigator";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import * as Font from "expo-font";
import { PaperProvider } from "react-native-paper";

SplashScreen.preventAutoHideAsync;

// const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    UberMove: require("./assets/fonts/UberMoveMedium.ttf"),
    UberMoveBold: require("./assets/fonts/UberMoveMedium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (fontsLoaded) {
    onLayoutRootView;
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider>
      <MainNavigator />
    </PaperProvider>
  );
}
