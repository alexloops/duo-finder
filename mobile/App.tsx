import React from "react";
import { View, Text, StatusBar } from "react-native";
import { Background } from "./src/components/Background";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { Loading } from "./src/components/Loading";
import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <AppRoutes /> : <Loading />}
    </Background>
  );
}
