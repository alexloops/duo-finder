import React from "react";
import { View, Image, FlatList } from "react-native";

import logoImg from "../../assets/logo-nlw-esports.png";
import { GameCard } from "../../components/gamecard";
import { Heading } from "../../components/heading";
import { GAMES } from "../../utils/games";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoImg} />
      <Heading
        title="Find your duo"
        subtitle="Select the game you want to play"
      />

      <FlatList
        contentContainerStyle={styles.contentList}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <GameCard
              id={item.id}
              ads={item.ads}
              name={item.name}
              cover={item.cover}
            />
          );
        }}
      />
    </View>
  );
}
