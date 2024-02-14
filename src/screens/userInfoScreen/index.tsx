import React, { useEffect } from "react";
import UserIcon from "../../../assets/user_icon.png";
import Container from "../../components/Container";
import MainContentContainer from "../../components/mainContentContainer";
import MuButton from "../../components/MuButton";
import { styleConstants } from "../../Constants/Constants";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import ArrowBackButton from "../../components/ArrowBack";
import { useSelector, useDispatch } from "react-redux";
import { setKey } from "../../store/slices/keySlice";
import API from "../../api";
import api_routes from "../../api/api_routes";
import { useTranslation } from "react-i18next";

type Props = {
  navigation: any;
};

const UserInfoScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const key = useSelector((state: any) => state.key.key);
  const address = useSelector((state: any) => state.address);
  const account = useSelector((state: any) => state.account);

  const createUserTransferKey = async () => {
    const response = await API.post(api_routes.CREATE_NEW_USER_KEY, {
      id: user.id,
    });

    dispatch(setKey({ key: response.data.key.key }));
  };

  const updateUserTransferKey = async () => {
    const response = await API.post(api_routes.UPDATE_USER_TRANSFER_KEY, {
      id: user.id,
    });

    dispatch(setKey({ key: response.data.key }));
  };

  return (
    <Container
      background={styleConstants.default_backgroundColor}
      justifyContent={"flex-end"}
    >
      <ArrowBackButton
        onPress={() => navigation.goBack()}
        arrowColor={"white"}
      />
      <View style={styles.userImageAndNameView}>
        <Image
          source={UserIcon}
          style={styles.userImage}
          resizeMode="contain"
        />
        <Text style={styles.userNameText}>{user.name.split(" ")[0]}</Text>
      </View>

      <MainContentContainer>
        <View style={styles.userInformationsView}>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>{t("Name")}:</Text>
            <Text style={styles.value}>{user.name}</Text>
          </View>

          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>{t("Birth date")}:</Text>
            <Text style={styles.value}>{user.birth_date}</Text>
          </View>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>{t("Email")}: </Text>
            <Text style={styles.value}>{user.email}</Text>
          </View>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>{t("Transfer key")}:</Text>
            <Text style={styles.value}>{key}</Text>
          </View>
          <View style={styles.transferKeyButtonView}>
            <MuButton
              text={key.key === "" ? t("Create a key") : t("Update key")}
              onPress={() => {
                if (key === "") {
                  createUserTransferKey();
                } else {
                  updateUserTransferKey();
                }
              }}
            />
          </View>
        </View>
        <View style={styles.addressInformationView}>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>{t("Country")}:</Text>
            <Text style={styles.value}>{address.countryName}</Text>
          </View>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>{t("Subregion")}:</Text>
            <Text style={styles.value}>{address.subregionName}</Text>
          </View>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>{t("City")}:</Text>
            <Text style={styles.value}>{address.cityName}</Text>
          </View>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>{t("Currency")}:</Text>
            <Text style={styles.value}>{address.countryCurrency}</Text>
          </View>
        </View>
        <View style={styles.accountInformationsView}>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>{t("Total amount in account")}:</Text>
            <Text style={styles.value}>{account.amount}</Text>
          </View>
        </View>
      </MainContentContainer>
    </Container>
  );
};

export default UserInfoScreen;
