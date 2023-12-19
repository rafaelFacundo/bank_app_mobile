import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

interface Props {
    iconToShow: ImageSourcePropType;
    size?: number;
    onPressFunction: () => void;
    backgroundColor?: string;
}

const OperationButton: React.FC<Props> = ({iconToShow, size, onPressFunction, backgroundColor}) => {
    //pass parameters to the style 
    const appliedValuesStyle = styles(size, backgroundColor);

    return(
        <TouchableOpacity onPress={onPressFunction} style={appliedValuesStyle.button}>
            <Image source={iconToShow} style={appliedValuesStyle.image}/>
        </TouchableOpacity>
    );
}

export default OperationButton;