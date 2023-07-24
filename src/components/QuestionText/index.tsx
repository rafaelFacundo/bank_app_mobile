import React from "react";
import { Text } from "react-native";
import styles from "./styles";

interface Props {
  question: string;
  fontSize: number;
}

const QuestionText: React.FC<Props> = ({ question, fontSize }) => {
  return <Text style={styles.questionText(fontSize)}>{question}</Text>;
};

export default QuestionText;
