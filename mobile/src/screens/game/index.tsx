import React, { useEffect, useState } from "react";
import { Image, FlatList, View, TouchableOpacity, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { Background } from "../../components/Background";

import { styles } from "./styles";
import { THEME } from "../../theme";
import logoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { AdCard } from "../../components/AdCard";
import { AdModal } from "../../components/AdModal";

interface GameRouteProps {
  id: string;
  title: string;
  bannerUrl: string;
}

export interface AdProps {
  id: string;
  hourEnd: string;
  hoursStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

export function Game() {
  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameRouteProps;

  const [ads, setAds] = useState<AdProps[]>([]);

  const [discordSelect, setDiscordSelect] = useState("");

  useEffect(() => {
    fetch(`http://127.0.0.1:3333/games/${game.id}/ads`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAds(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  async function getDiscordUser(adsId: string) {
    fetch(`http://127.0.0.1:3333/ads/${adsId}/discord`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDiscordSelect(data.discord);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image style={styles.logo} source={logoImg} />
          <View />
        </View>
        <Image source={{ uri: game.bannerUrl }} style={styles.cover} />
        <Heading title={game.title} subtitle={"Conect to start playing!"} />

        <FlatList
          contentContainerStyle={styles.contentList}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={ads}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <AdCard ad={item} onConnect={() => getDiscordUser(item.id)} />
            );
          }}
          ListEmptyComponent={
            <Text style={{ color: "#fff" }}>No ads yet.</Text>
          }
        />
        <AdModal
          visible={discordSelect !== ""}
          onClose={() => setDiscordSelect("")}
          discord={discordSelect}
        />
      </SafeAreaView>
    </Background>
  );
}
