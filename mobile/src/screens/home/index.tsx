import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import logoImg from "../../assets/logo-nlw-esports.png";
import { Background } from "../../components/Background";
import { GameCard } from "../../components/GameCard";
import { Heading } from "../../components/Heading";

import { styles } from "./styles";

export interface GameProps {
  id: string;
  title: string;
  _count: { ads: number };
  bannerUrl: string;
}

export function Home() {
  const [gamesData, setGamesData] = useState<GameProps[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    fetch("http://127.0.0.1:3333/games")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGamesData(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const handleOpenGame = ({ id, title, bannerUrl }: GameProps) => {
    navigation.navigate("game", { id, title, bannerUrl });
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={logoImg} resizeMode="cover" />
        <Heading
          title="Find your duo"
          subtitle="Select the game you want to play"
        />

        <FlatList
          contentContainerStyle={styles.contentList}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={gamesData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <GameCard
                id={item.id}
                _count={item["_count"]}
                title={item.title}
                bannerUrl={item.bannerUrl}
                onPress={() => handleOpenGame(item)}
              />
            );
          }}
        />

        {gamesData.length === 0 && (
          <Text style={{ color: "#fff" }}>Loading...</Text>
        )}
      </SafeAreaView>
    </Background>
  );
}
