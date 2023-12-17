import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import OperationButton from "../operationButton";
import MuInconWhite from "../../../../../assets/MuIcon_white.png";
import SettingsIcon from "../../../../../assets/settings_icon.png";
import LogoutIcon from "../../../../../assets/logout_icon.png";
import UserIcon from "../../../../../assets/user_icon.png";
import styles from "./styles";

const Header: React.FC = () => {

    const temporaryFunction = () => {}

    return(
        <View style={styles.mainContentView}>
            <Image source={MuInconWhite} style={styles.MuIconImage}/>
            <View>
                <OperationButton iconToShow={UserIcon} onPressFunction={temporaryFunction} width={40} height={40}/>
            </View>
        </View>
    )
}

export default Header;