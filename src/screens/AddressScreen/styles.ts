import { StyleSheet, Platform } from "react-native";
import { styleConstants } from "../../Constants/Constants";

const styles = StyleSheet.create({
  inputAndButtonView: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",

    paddingBottom: 10,
    paddingTop: 70,
  },
  questionText: {
    width: "90%",
  },
  questionAndInputView: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  countriesPicker: {
    width: "100%",
    height: "100%",
  },
  countriesPickerView: {
    width: "100%",
    // height: Platform.OS == "android" ? 50 : "50%",
    height: 100,
    borderBottomColor: styleConstants.default_backgroundColor,
    borderBottomWidth: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // overflow: "scroll",
  },
  scroll: {
    flex: 1,
    width: "100%",
    paddingTop: 10,
    paddingBottom: 20,
    position: "relative",
  },
  scrollContentContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 20,
  },
});

export default styles;
