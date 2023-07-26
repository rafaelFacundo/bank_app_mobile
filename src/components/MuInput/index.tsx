import React, { SetStateAction } from "react";
import { TextInput } from "react-native";
import styles from "./styles";

interface Props {
  setState: React.Dispatch<SetStateAction<string>>;
  state: string;
  maskFunction?: (stringToProcess: string) => string;
}

const MuInput: React.FC<Props> = ({ setState, state, maskFunction }) => {
  const handleChangeEvent = (value: string): void => {
    if (maskFunction) {
      const newString = maskFunction(value);
      setState(newString);
      return;
    }
    setState(value);
  };
  return (
    <TextInput
      onChangeText={handleChangeEvent}
      style={styles.muInput}
      defaultValue={state}
    />
  );
};

export default MuInput;
