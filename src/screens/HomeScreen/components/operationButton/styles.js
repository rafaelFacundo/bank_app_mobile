import { StyleSheet } from "react-native";
import { styleConstants } from "../../../../Constants/Constants";

const styles = (size, backgroundColor) => StyleSheet.create({
    button: {
        width:  size ? size : 50,
        height: size ? size : 50,
        borderRadius: size ? size : 50/2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: backgroundColor ? backgroundColor : "none"
    },
    image: {
        width: size ? size : 50,
        height: size ? size : 50,
        borderRadius: size ? size/2 : 50/2,

    }
});

export default styles;