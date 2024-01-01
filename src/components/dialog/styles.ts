import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewContainer: {
    padding: 20,
    zIndex: 10,
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  contentView: {
    backgroundColor: "white",
    width: "70%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
