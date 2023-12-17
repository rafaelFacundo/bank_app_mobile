import { StyleSheet } from "react-native";
import { styleConstants } from "../../Constants/Constants";

const styles = StyleSheet.create({
  muInput: {
    width: "100%",
    height: 50,
    borderBottomColor: styleConstants.default_backgroundColor,
    borderBottomWidth: 4,
    fontSize: 20,
    marginBottom: 15,
  },
  contentDiv: {
    width: "100%",
    position: "relative",
    backgroundColor: "pink"
  },
  showPasswordIcon: {
    width: 30,
    height: 30,
  },
  showPasswordButton: {
    position: "absolute",
    right: 0
  }
});

export default styles;
