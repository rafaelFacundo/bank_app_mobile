import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import { setAmount } from "../../store/slices/accountSlice";
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
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const params = route.params;
  const userInfos = params;

  const [password, setPassword] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const makeResquestToCreateAnewUser = async (
    newUserInformations: NewUserInfomation_type
  ) => {
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

      dispatch(
        setUser({
          user: {
            name: response.data.res.user.name,
            email: response.data.res.user.email,
            birth_date: response.data.res.user.birth_date,
            document: response.data.res.user.document,
            is_active: response.data.res.user.is_active,
            country: response.data.res.country.name,
            currency: "" /* response.data.res.user.currency, */,
          },
        })
      );
      dispatch(setAmount({ value: response.data.res.userAccount.amount }));
      setShowDialog(false);
      navigation.navigate("HomeScreen");
    } catch (error) {
      setShowDialog(false);
      console.log(error);
      Alert.alert(t("Something went wrong, please try again later."));
    }
  };

  const makeRequestToLogin = async (
    userInformation: loginUserInformation_type
  ) => {
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
            if (password && userInfos.type === 0) {
              makeResquestToCreateAnewUser({
                ...userInfos,
                password: password,
              });
            } else if (password && userInfos.type === 1) {
              console.log("going to make login");
              makeRequestToLogin({
                name: userInfos.name,
                email: userInfos.email,
                document: userInfos.document,
                password: password,
              });
            } else {
              Alert.alert(t("Completing all fields is mandatory"));
            }
          }}
        />
      </View>
    </Container>
  );
};

export default PasswordScreen;
