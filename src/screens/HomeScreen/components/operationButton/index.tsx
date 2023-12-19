import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

interface Props {
  iconToShow: ImageSourcePropType;
  size?: number;
  onPressFunction: () => void;
  backgroundColor?: string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  label?: string;
}

const OperationButton: React.FC<Props> = ({
  iconToShow,
  size,
  onPressFunction,
  backgroundColor,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  label,
}) => {
  //pass parameters to the style
  const appliedValuesStyle = styles(
    size,
    backgroundColor,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom
  );

  return (
    <View style={appliedValuesStyle.buttonView}>
      <TouchableOpacity
        onPress={onPressFunction}
        style={appliedValuesStyle.button}
      >
        <Image source={iconToShow} style={appliedValuesStyle.image} />
      </TouchableOpacity>
      {label && <Text style={appliedValuesStyle.label}>{label}</Text>}
    </View>
  );
};

export default OperationButton;
