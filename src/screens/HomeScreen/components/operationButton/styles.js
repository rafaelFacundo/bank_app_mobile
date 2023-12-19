import { StyleSheet } from "react-native";
import { styleConstants } from "../../../../Constants/Constants";

const styles = (
  size,
  backgroundColor,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom
) =>
  StyleSheet.create({
    button: {
      width: size ? size : 50,
      height: size ? size : 50,
      borderRadius: size ? size : 50 / 2,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: backgroundColor ? backgroundColor : "none",
    },
    image: {
      width: size ? size : 50,
      height: size ? size : 50,
      borderRadius: size ? size / 2 : 50 / 2,
    },
    buttonView: {
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: marginBottom ? marginBottom : 0,
      marginLeft: marginLeft ? marginLeft : 0,
      marginRight: marginRight ? marginRight : 0,
      marginTop: marginTop ? marginTop : 0,
    },
    label: {
      fontFamily: "Poppins",
      textAlign: "center",
      width: "100%",
    },
  });

export default styles;
