import { StyleSheet } from "react-native";
import { styleConstants } from "../../Constants/Constants";

const styles = StyleSheet.create({
  inputDate: {
    width: "100%",
    borderBottomColor: styleConstants.default_backgroundColor,
    borderBottomWidth: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    width: "90%",
  },
  inputText: {
    fontFamily: "Poppins",
    fontSize: 20,
  },
});

export default styles;
