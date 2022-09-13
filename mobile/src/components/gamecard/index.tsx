import React from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { THEME } from "../../theme";

export interface GameCardProps extends TouchableOpacityProps {
  id: string;
  name: string;
  ads: number;
  cover: ImageSourcePropType;
}

export function GameCard(props: GameCardProps) {
  const { id, cover, name, ads, ...rest } = props;
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={cover}>
        <LinearGradient style={styles.footer} colors={THEME.COLORS.FOOTER}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.ads}>{ads > 1 ? `${ads} ads` : `${ads} ad`}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
