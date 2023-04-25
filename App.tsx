import React, { useCallback } from "react";

import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useFonts, Roboto_300Light } from "@expo-google-fonts/roboto";

import FlashMessage from "react-native-flash-message";

import colors from "./src/global/colors";

import Home from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar
        style="light"
        translucent={false}
        backgroundColor={colors.blue}
      />
      <Home />
      <FlashMessage />
    </>
  );
}