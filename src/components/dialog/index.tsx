import React from "react";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import closeDialogIcon from "../../../assets/closeDialog_icon.png";
import styles from "./styles";

interface Props {
  children?: React.ReactNode;
}

const Dialog: React.FC<Props> = ({ children }) => {
  return (
    <View style={styles.viewContainer}>
      {/* <View>
        <TouchableOpacity>
          <Image source={closeDialogIcon} />
        </TouchableOpacity>
      </View> */}
      <View style={styles.contentView}>{children}</View>
    </View>
  );
};

export default Dialog;
