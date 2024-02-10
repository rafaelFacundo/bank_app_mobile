import { StyleSheet } from "react-native";
import { styleConstants } from "../../Constants/Constants";

const styles = StyleSheet.create({
  userImage: {
    width: 120,
    height: 120,
    padding: 10,
    backgroundColor: styleConstants.button_gray_background,
    borderRadius: 60,
  },
  userImageAndNameView: {
    zIndex: 5,
    position: "absolute",
    top: "15%",
    width: "100%",
    alignItems: "center",
  },
  userNameText: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: 20,
  },
  userInformationsView: {
    marginTop: "20%",
    borderBottomColor: styleConstants.default_backgroundColor,
    borderBottomWidth: 4,
    paddingBottom: 20,
  },
  keyAndValueView: {
    flexDirection: "row",
  },
  key: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 16,
  },
  value: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: 16,
    marginLeft: 3,
  },
  transferKeyButtonView: {
    alignItems: "center",
    width: "100%",
    marginTop: 5,
  },
  addressInformationView: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: styleConstants.default_backgroundColor,
    borderBottomWidth: 4,
  },
  accountInformationsView: {
    paddingTop: 20,
  },
});

export default styles;
