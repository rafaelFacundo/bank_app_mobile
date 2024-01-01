import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContentView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 100,
        paddingTop: 30,
    },
    MuIconImage: {
        width: 80,
        height: 80,
        resizeMode: "center",
        marginLeft: 12
    },
    buttonsView: {
        width: "50%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    imageIconView: {
        width: "50%",
        height: "100%"
    }
});

export default styles;