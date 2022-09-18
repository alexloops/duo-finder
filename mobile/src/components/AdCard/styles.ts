import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    margin: 24,
    width: 180,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    padding: 20,
    marginRight: 16,
  },

  button: {
    flexDirection: "row",
    padding: 8,
    borderRadius: 4,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.COLORS.PRIMARY,
  },
  buttonTitle: {
    marginLeft: 8,
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },

  singleInfoContainer: {
    width: "100%",
    marginBottom: 16,
  },

  singleInfolabel: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    marginBottom: 4,
  },
  singleInfoValue: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
});
