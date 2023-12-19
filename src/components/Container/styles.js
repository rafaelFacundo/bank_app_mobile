import { StyleSheet } from "react-native";

const styles = (background, height, width, justifyContent) => StyleSheet.create({
    containerView: {
        backgroundColor: background ? background : "none",
        height: height ? height : "100%",
        width: width ? width : "100%",
        justifyContent: justifyContent ? justifyContent : "flex-start"
    }
});

export default styles;