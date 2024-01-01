import React from "react";
import { Text } from "react-native";
import styles from "./styles";

interface Props {
  question: string;
  fontSize: number;
}

const QuestionText: React.FC<Props> = ({ question, fontSize }) => {
  const stylesWithParametersApllied = styles(fontSize);
  return (
    <Text style={stylesWithParametersApllied.questionText}>{question}</Text>
  );
};

export default QuestionText;
