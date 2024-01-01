import React, { useState } from "react";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import { View } from "react-native";
import QuestionText from "../../components/QuestionText";
import MuInput from "../../components/MuInput";
import MuButton from "../../components/MuButton";
import styles from "./styles";
import { NewUserInfomation_type } from "../../types/user";
import api_routes from "../../api/api_routes";
import API from "../../api";

interface Props {
  navigation: any;
  route: any;
}

const PasswordScreen: React.FC<Props> = ({ navigation, route }) => {
  const params = route.params;
  const [password, setPassword] = useState("");
  const userInfos = params;
  delete userInfos.type;

  const makeResquestToCreateAnewUser = async (
    newUserInformations: NewUserInfomation_type
  ) => {
    try {
      const response = await API.post(api_routes.CREATE_NEW_USER, {
        name: newUserInformations.name,
        email: newUserInformations.email,
        password: password,
        document: newUserInformations.document,
        birth_date: newUserInformations.birth_date,
        city: newUserInformations.city,
        neighbourhood: newUserInformations.neighbourhood,
        zip: newUserInformations.zip,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <ArrowBackButton onPress={() => navigation.goBack()} />
      <View style={styles.inputAndButtonView}>
        <View style={styles.questionAndInputView}>
          <View style={styles.questionText}>
            <QuestionText fontSize={30} question={"Qual a sua senha ?"} />
          </View>
          <View style={styles.inputView}>
            <MuInput
              setState={setPassword}
              state={password}
              passwordMode={true}
            />
          </View>
        </View>
        <MuButton
          text={"Avançar"}
          onPress={() =>
            makeResquestToCreateAnewUser({ ...userInfos, password: password })
          }
        />
      </View>
    </Container>
  );
};

export default PasswordScreen;
