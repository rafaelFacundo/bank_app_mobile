import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  muIcon: {
    width: 80,
    height: 80,
  },
  womanImage: {
    height: "90%",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  beggingButtonDiv: {
    width: "100%",
    position: "absolute",
    bottom: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  goToLoginButton: {
    position: "absolute",
    bottom: 70,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  selectCountryButton: {
    backgroundColor: "rgba(0,0,0,0.3)",
    height: 40,
    width: 120,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  iconAndCountryButtonDiv: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 30,
  },
  arrowDown: {
    width: 15,
    height: 15,
    marginLeft: 10,
  },
  countryName: {
    color: "white",
  },
  sloganText: {
    color: "white",
    fontSize: 40,
    position: "absolute",
    top: Dimensions.get("window").height / 2,
    paddingLeft: 15,
    zIndex: 5,
    fontFamily: "Poppins",
    fontWeight: "800",
  },
  goToLoginText: {
    fontFamily: "Poppins",
    fontWeight: "800",
  },
});

export default styles;
