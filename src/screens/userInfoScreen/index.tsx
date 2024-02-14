import React, { useEffect } from "react";
import UserIcon from "../../../assets/user_icon.png";
import Container from "../../components/Container";
import MainContentContainer from "../../components/mainContentContainer";
import MuButton from "../../components/MuButton";
import { styleConstants } from "../../Constants/Constants";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import ArrowBackButton from "../../components/ArrowBack";
import { useSelector, UseDispatch, useDispatch } from "react-redux";
import { setKey } from "../../store/slices/keySlice";
import API from "../../api";
import api_routes from "../../api/api_routes";

type Props = {
  navigation: any;
};

const UserInfoScreen: React.FC<Props> = ({ navigation }) => {
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
            <Text style={styles.key}>Nome:</Text>
            <Text style={styles.value}>{user.name}</Text>
          </View>

          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>Data de nascimento:</Text>
            <Text style={styles.value}>{user.birth_date}</Text>
          </View>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>Email: </Text>
            <Text style={styles.value}>{user.email}</Text>
          </View>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>Chave de transferência:</Text>
            <Text style={styles.value}>{key}</Text>
          </View>
          <View style={styles.transferKeyButtonView}>
            <MuButton
              text={key.key === "" ? "Criar chave" : "Atualizar chave"}
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
            <Text style={styles.key}>País:</Text>
            <Text style={styles.value}>{address.countryName}</Text>
          </View>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>Subregião:</Text>
            <Text style={styles.value}>{address.subregionName}</Text>
          </View>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>Cidade:</Text>
            <Text style={styles.value}>{address.cityName}</Text>
          </View>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>Moeda:</Text>
            <Text style={styles.value}>{address.countryCurrency}</Text>
          </View>
        </View>
        <View style={styles.accountInformationsView}>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>Valor total na conta:</Text>
            <Text style={styles.value}>{account.amount}</Text>
          </View>
        </View>
      </MainContentContainer>
    </Container>
  );
};

export default UserInfoScreen;
