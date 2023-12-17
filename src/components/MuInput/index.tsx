import React, { SetStateAction, useState } from "react";
import { Image, TextInput, View } from "react-native";
import styles from "./styles";
import OpenEyeIcon from "../../../assets/openEye_icon.png";
import ClaseEyeIcon from "../../../assets/closeEye_icon.png";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  setState: React.Dispatch<SetStateAction<string>>;
  state: string;
  maskFunction?: (stringToProcess: string) => string;
  passwordMode?: boolean;
}

const MuInput: React.FC<Props> = ({ setState, state, maskFunction, passwordMode }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleChangeEvent = (value: string): void => {
    if (maskFunction) {
      const newString = maskFunction(value);
      setState(newString);
      return;
    }
    setState(value);
  };

  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  }
  return (
    <View style={styles.contentDiv}>
      <TextInput
        onChangeText={handleChangeEvent}
        style={styles.muInput}
        defaultValue={state}
        secureTextEntry={passwordMode}
      />
      {passwordMode && (
        <TouchableOpacity onPress={handleShowPassword} style={styles.showPasswordButton}>
          <Image source={showPassword ? ClaseEyeIcon : OpenEyeIcon} style={styles.showPasswordIcon}/>
        </TouchableOpacity>
      )}
    </View>
    
  );
};

export default MuInput;
