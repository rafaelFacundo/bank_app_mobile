import { StyleSheet } from "react-native";

const styles = (
  fontSize: any,
  marginBottom: any,
  marginTop: any,
  marginLeft: any,
  marginRight: any
) =>
  StyleSheet.create({
    questionText: {
      width: "100%",
      fontFamily: "Poppins",
      fontSize: fontSize,
      marginBottom: marginBottom ? marginBottom : 0,
      marginTop: marginTop ? marginTop : 0,
      marginLeft: marginLeft ? marginLeft : 0,
      marginRight: marginRight ? marginRight : 0,
    },
  });

export default styles;
