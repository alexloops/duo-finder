import React from "react";
import { ImageBackground } from "react-native";

import { styles } from "./styles";

import backgroundImg from "../../assets/background-galaxy.png";

interface BackgroundProps {
  children: React.ReactNode;
}

export function Background(props: BackgroundProps) {
  const { children } = props;

  return (
    <ImageBackground
      source={backgroundImg}
      defaultSource={backgroundImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}
