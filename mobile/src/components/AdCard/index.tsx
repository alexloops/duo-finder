import React from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
  ColorValue,
  TextProps,
} from "react-native";
import { styles } from "./styles";
import { THEME } from "../../theme";

import { AdProps } from "../../screens/game";
import { GameController } from "phosphor-react-native";

interface AdCardProps {
  ad: AdProps;
  onConnect: () => void;
}

export function AdCard({ ad, onConnect }: AdCardProps) {
  return (
    <View style={styles.container}>
      <SingleInfo label="Name" value={ad.name} numberOfLines={1} />
      <SingleInfo
        label="Playing for"
        value={
          ad.yearsPlaying === 0
            ? "< 1 year"
            : ad.yearsPlaying === 1
            ? "1 year"
            : ad.yearsPlaying + " years"
        }
        numberOfLines={1}
      />
      <SingleInfo
        label="Available"
        value={`${
          ad.weekDays.length > 1
            ? ad.weekDays.length + " days"
            : ad.weekDays.length + " day"
        }  \n${ad.hoursStart} - ${ad.hourEnd}`}
      />
      <SingleInfo
        label="Uses voice chat"
        value={ad.useVoiceChannel ? "Yes" : "No"}
        color={ad.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
        numberOfLines={1}
      />
      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController size={20} color={THEME.COLORS.TEXT} />
        <Text style={styles.buttonTitle}>Connect</Text>
      </TouchableOpacity>
    </View>
  );
}

interface SingleInfoProps extends TextProps {
  label: string;
  value: string;
  color?: ColorValue;
}

function SingleInfo({
  label,
  value,
  color = THEME.COLORS.TEXT,
  ...rest
}: SingleInfoProps) {
  return (
    <View style={styles.singleInfoContainer}>
      <Text style={styles.singleInfolabel}>{label}</Text>
      <Text style={[styles.singleInfoValue, { color: color }]} {...rest}>
        {value}
      </Text>
    </View>
  );
}
