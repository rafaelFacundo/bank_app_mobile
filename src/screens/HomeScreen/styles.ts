import { StyleSheet } from "react-native";
import { styleConstants } from "../../Constants/Constants";

const styles = StyleSheet.create({
  accountView: {
    width: "100%",
    //height: 60,
  },
  accountText: {
    fontSize: 26,
    fontFamily: "Poppins",
    fontWeight: "800",
  },
  accountTextValue: {
    fontFamily: "Poppins",
    fontSize: 26,
  },
  accountTextAndArrowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  accountArrowIcon: {
    width: 20,
    height: 20,
  },
  buttonsView: {
    flexDirection: "row",
    width: "100%",
    marginTop: "10%",
  },
  cardView: {
    backgroundColor: styleConstants.button_gray_background,
    width: "100%",
    height: 65,
    marginTop: "10%",
  },
  cardButton: {
    width: "100%",
    height: "100%",
    padding: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  cardImage: {
    width: 70,
    height: 70,
    resizeMode: "center",
  },
  cardText: {
    fontFamily: "Poppins",
    fontSize: 17,
    marginLeft: 6,
  },
  blueLine: {
    width: "100%",
    height: 7,
    backgroundColor: styleConstants.default_backgroundColor,
    marginTop: "10%",
    marginBottom: "10%",
  },
  creditCardView: {
    width: "100%",
  },
});

export default styles;
