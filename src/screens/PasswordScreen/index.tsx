import React, { useState } from "react";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import { Image, Text, View } from "react-native";
import QuestionText from "../../components/QuestionText";
import MuInput from "../../components/MuInput";
import MuButton from "../../components/MuButton";
import { NewUserInfomation_type } from "../../types/user";
import AuthIlustration from "../../../assets/authIlustration.png";
import api_routes from "../../api/api_routes";
import API from "../../api";
import Dialog from "../../components/dialog";
import styles from "./styles";

interface Props {
  navigation: any;
  route: any;
}

const PasswordScreen: React.FC<Props> = ({ navigation, route }) => {
  const params = route.params;
  const userInfos = params;
  delete userInfos.type;

  const [password, setPassword] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const makeResquestToCreateAnewUser = async (
    newUserInformations: NewUserInfomation_type
  ) => {
    console.log(userInfos);
    setShowDialog(true);
    try {
      const response = await API.post(api_routes.CREATE_NEW_USER, {
        name: newUserInformations.name,
        email: newUserInformations.email,
        password: password,
        document: newUserInformations.document,
        birth_date: newUserInformations.birth_date,
        city: newUserInformations.city,
        neighbourhood: newUserInformations.neighbourhood,
        country: newUserInformations.country,
        street: newUserInformations.street,
        house_number: newUserInformations.houseNumber,
        state: newUserInformations.addresState,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setShowDialog(false);
  };

  return (
    <Container>
      {showDialog && (
        <Dialog>
          <Image
            source={AuthIlustration}
            resizeMode={"center"}
            style={styles.authIlustration}
          />
          <Text style={styles.authText}>
            ESTAMOS PROCESSANDO SEU CADASTRO, AGUARDE
          </Text>
        </Dialog>
      )}
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
