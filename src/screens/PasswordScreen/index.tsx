import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import { Alert, Image, Text, View } from "react-native";
import QuestionText from "../../components/QuestionText";
import MuInput from "../../components/MuInput";
import MuButton from "../../components/MuButton";
import {
  NewUserInfomation_type,
  loginUserInformation_type,
} from "../../types/user";
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
  const { t } = useTranslation();
  const params = route.params;
  const requestType = Object.assign({}, params);
  const userInfos = params;
  console.log("teste", params);
  console.log("request ", requestType);
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
      Alert.alert(t("Something went wrong, please try again later."));
    }
    setShowDialog(false);
  };

  const makeRequestToLogin = async (
    userInformation: loginUserInformation_type
  ) => {
    console.log(userInfos);
    setShowDialog(true);
    try {
      const response = await API.post(api_routes.MAKE_LOGIN, userInformation);
      console.log(response);
    } catch (error) {
      console.log(error);
      Alert.alert(t("Something went wrong, please try again later."));
    }
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
            <QuestionText fontSize={30} question={t("Enter your password:")} />
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
          text={t("Next")}
          onPress={() => {
            console.log(requestType);
            /* if (password && requestType === 0) {
              makeResquestToCreateAnewUser({
                ...userInfos,
                password: password,
              });
            } else if (password && requestType === 1) {
              makeRequestToLogin({
                name: userInfos.name,
                email: userInfos.email,
                document: userInfos.document,
                password: password,
              });
            } else {
              Alert.alert(t("Completing all fields is mandatory"));
            } */
            if (password) {
              makeRequestToLogin({
                name: userInfos.name,
                email: userInfos.email,
                document: userInfos.document,
                password: password,
              });
            }
          }}
        />
      </View>
    </Container>
  );
};

export default PasswordScreen;
