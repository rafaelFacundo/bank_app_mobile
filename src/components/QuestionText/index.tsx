import React from "react";
import { Text } from "react-native";
import styles from "./styles";

interface Props {
  question: string;
  fontSize: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const QuestionText: React.FC<Props> = ({
  question,
  fontSize,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}) => {
  const stylesWithParametersApllied = styles(
    fontSize,
    marginBottom,
    marginTop,
    marginLeft,
    marginRight
  );
  return (
    <Text style={stylesWithParametersApllied.questionText}>{question}</Text>
  );
};

export default QuestionText;
