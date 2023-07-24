import React from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "./styles";

interface Props {
  dateToShow: Date;
  setDate: (event, value) => void;
  setShow: any;
  showPicker: boolean;
}

const DateInput: React.FC<Props> = ({
  dateToShow,
  setDate,
  setShow,
  showPicker,
}) => {
  return (
    <View style={styles.inputView}>
      <TouchableOpacity style={styles.inputDate} onPress={setShow}>
        <Text style={styles.inputText}>
          {dateToShow.toLocaleString("pt-BR").split(" ")[0]}
        </Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={dateToShow}
          mode={"date"}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={setDate}
        />
      )}
    </View>
  );
};

export default DateInput;
