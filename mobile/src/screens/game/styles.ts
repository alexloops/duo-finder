import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 32,
    marginTop: 28,
    justifyContent: "space-between",
  },
  logo: {
    width: 106,
    height: 60,
  },
  cover: {
    width: 311,
    height: 160,
    borderRadius: 8,
    marginTop: 32,
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: "flex-start",
  },
});
