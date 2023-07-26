import React, { SetStateAction } from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
} from "react-native";
import styles from "./styles";

interface Props {
  setState: React.Dispatch<SetStateAction<string>>;
}

const MuInput: React.FC<Props> = ({ setState }) => {
  const handleChangeEvent = (value: string): void => {
    setState(value);
  };
  return <TextInput onChangeText={handleChangeEvent} style={styles.muInput} />;
};

export default MuInput;
