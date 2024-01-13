import { StyleSheet } from "react-native";
import { styleConstants } from "../../Constants/Constants";

const styles = (
  marginBottom: any,
  marginTop: any,
  marginLeft: any,
  marginRight: any
) =>
  StyleSheet.create({
    muInput: {
      width: "100%",

      fontSize: 20,
      marginBottom: 15,
      flex: 1,
    },
    contentDiv: {
      width: "100%",
      height: 50,
      flexDirection: "row",
      justifyContent: "center",
      borderBottomColor: styleConstants.default_backgroundColor,
      borderBottomWidth: 4,
      marginBottom: marginBottom ? marginBottom : 0,
      marginTop: marginTop ? marginTop : 0,
      marginLeft: marginLeft ? marginLeft : 0,
      marginRight: marginRight ? marginRight : 0,
    },
    showPasswordIcon: {
      width: 30,
      height: 30,
    },
    showPasswordButton: {},
  });

export default styles;
