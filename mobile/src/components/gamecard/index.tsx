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

import { GameProps } from "../../screens/home";

type GameCardProps = GameProps & TouchableOpacityProps;

export function GameCard(props: GameCardProps) {
  const { id, bannerUrl, title, _count, ...rest } = props;
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={{ uri: bannerUrl }}>
        <LinearGradient style={styles.footer} colors={THEME.COLORS.FOOTER}>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.ads}>
            {_count.ads > 1 ? `${_count.ads} ads` : `${_count.ads} ad`}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
