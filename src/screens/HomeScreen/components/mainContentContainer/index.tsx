import React from "react";
import { View } from "react-native";
import styles from "./style";

interface Props {
    children: React.ReactNode
}

const MainContentContainer: React.FC<Props> = ({children}) => {
    return(
        <View style={styles.MainContentView}>
            {children}
        </View>
    );
}

export default MainContentContainer;