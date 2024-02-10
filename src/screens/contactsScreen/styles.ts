import { StyleSheet } from "react-native";
import { styleConstants } from "../../Constants/Constants";

const styles = StyleSheet.create({
  scroll: {
    width: "100%",
    marginTop: "25%",
  },
  keyValueView: {
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
  contactView: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    alignItems: "center",
    padding: 10,
    borderBottomColor: styleConstants.default_backgroundColor,
    borderBottomWidth: 4,
  },
  keyAndValuesListView: {
    flex: 1,
  },
  arrowImage: {
    width: 40,
    height: 40,
  },
});

export default styles;
