import React from "react";
import { Text } from "react-native";
import styles from "./styles";

interface Props {
  question: string;
}

const QuestionText: React.FC<Props> = ({ question }) => {
  return <Text style={styles.questionText}>{question}</Text>;
};

export default QuestionText;
