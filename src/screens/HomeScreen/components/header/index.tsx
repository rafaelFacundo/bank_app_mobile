import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import OperationButton from "../operationButton";
import MuInconWhite from "../../../../../assets/MuIcon_white.png";
import SettingsIcon from "../../../../../assets/settings_icon.png";
import LogoutIcon from "../../../../../assets/logout_icon.png";
import UserIcon from "../../../../../assets/user_icon.png";
import styles from "./styles";

type Props = {
  navigation: any;
};

const Header: React.FC<Props> = ({ navigation }) => {
  const temporaryFunction = () => {};

  const redirectToUserInfoScreen = () => {
    navigation.navigate("UserInfoScreen");
  };

  return (
    <View style={styles.mainContentView}>
      <View style={styles.imageIconView}>
        <Image source={MuInconWhite} style={styles.MuIconImage} />
      </View>
      <View style={styles.buttonsView}>
        <OperationButton
          iconToShow={UserIcon}
          onPressFunction={redirectToUserInfoScreen}
          size={40}
        />
        <OperationButton
          iconToShow={SettingsIcon}
          onPressFunction={temporaryFunction}
          size={40}
        />
        <OperationButton
          iconToShow={LogoutIcon}
          onPressFunction={temporaryFunction}
          size={40}
        />
      </View>
    </View>
  );
};

export default Header;
