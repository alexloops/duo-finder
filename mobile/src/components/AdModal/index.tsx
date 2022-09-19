import React from "react";
import {
  Modal,
  ModalProps,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { THEME } from "../../theme";
import { CheckCircle } from "phosphor-react-native";
import { Heading } from "../Heading";
import * as Clipboard from "expo-clipboard";

interface AdModalProps extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function AdModal({ discord, onClose, ...rest }: AdModalProps) {
  const copyDiscord = async () => {
    await Clipboard.setStringAsync(discord);
    Alert.alert("Discord Copied", "Discord user copied to clipboard!");
  };

  return (
    <Modal transparent statusBarTranslucent animationType="fade" {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcons} onPress={onClose}>
            <MaterialIcons
              name="close"
              size={28}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>
          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />
          <Heading
            title="Let's Play!"
            subtitle="Get in touch and start playing"
            style={{ alignItems: "center", marginTop: 24 }}
          />
          <Text style={styles.label}> Add on Discord</Text>
          <TouchableOpacity style={styles.discordButton} onPress={copyDiscord}>
            <Text style={styles.discord}>{discord}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
