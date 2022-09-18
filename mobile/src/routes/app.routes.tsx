import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Home } from "../screens/home";

import { Game } from "../screens/game";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Home} />
        <Screen name="game" component={Game} />
      </Navigator>
    </NavigationContainer>
  );
}
