import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

interface Props {
    iconToShow: ImageSourcePropType;
    width?: number;
    height?: number;
    onPressFunction: () => void;
}

const OperationButton: React.FC<Props> = ({iconToShow, width, height, onPressFunction}) => {

    //const appliedValuesStyle = styles(width, height);

    return(
        <TouchableOpacity onPress={onPressFunction} style={styles.button}>
            <Image source={iconToShow} style={styles.image}/>
        </TouchableOpacity>
    );
}

export default OperationButton;