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
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  amountMode?: boolean;
}

const MuInput: React.FC<Props> = ({
  setState,
  state,
  maskFunction,
  passwordMode,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  amountMode,
}) => {
  const styleWithPropsApplied = styles(
    marginBottom,
    marginLeft,
    marginRight,
    marginTop
  );
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [passwordModeState, setPasswordModeState] = useState<
    boolean | undefined
  >(passwordMode);
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
    setPasswordModeState(!passwordModeState);
  };
  return (
    <View style={styleWithPropsApplied.contentDiv}>
      <TextInput
        onChangeText={handleChangeEvent}
        style={styleWithPropsApplied.muInput}
        defaultValue={state}
        secureTextEntry={passwordModeState}
        keyboardType={amountMode ? "number-pad" : "default"}
      />
      {passwordMode && (
        <TouchableOpacity
          onPress={handleShowPassword}
          style={styleWithPropsApplied.showPasswordButton}
        >
          <Image
            source={showPassword ? ClaseEyeIcon : OpenEyeIcon}
            style={styleWithPropsApplied.showPasswordIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MuInput;
