import React from "react";
import UserIcon from "../../../assets/user_icon.png";
import Container from "../../components/Container";
import MainContentContainer from "../../components/mainContentContainer";
import MuButton from "../../components/MuButton";
import { styleConstants } from "../../Constants/Constants";
import { Image, Text, View } from "react-native";
import styles from "./styles";

const UserInfoScreen: React.FC<any> = () => {
  return (
    <Container
      background={styleConstants.default_backgroundColor}
      justifyContent={"flex-end"}
    >
      <View style={styles.userImageAndNameView}>
        <Image
          source={UserIcon}
          style={styles.userImage}
          resizeMode="contain"
        />
        <Text style={styles.userNameText}>Jubiscleudo</Text>
      </View>

      <MainContentContainer>
        <View style={styles.userInformationsView}>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>Nome:</Text>
            <Text style={styles.value}>Jusbiscleudo da silva santos</Text>
          </View>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>Idade:</Text>
            <Text style={styles.value}>25</Text>
          </View>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>Data de nascimetno</Text>
            <Text style={styles.value}>25/03/2000</Text>
          </View>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>Chave de transferência:</Text>
            <Text style={styles.value}>ahfai89rfh09#4</Text>
          </View>
          <View style={styles.transferKeyButtonView}>
            <MuButton text={"Criar chave"} onPress={() => {}} />
          </View>
        </View>
        <View style={styles.addressInformationView}>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>País:</Text>
            <Text style={styles.value}>Japão</Text>
          </View>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>Subregião:</Text>
            <Text style={styles.value}>Tk</Text>
          </View>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>Cidade:</Text>
            <Text style={styles.value}>Tóquio</Text>
          </View>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>Moeda:</Text>
            <Text style={styles.value}>IEN</Text>
          </View>
        </View>
        <View style={styles.accountInformationsView}>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>Valor total na conta:</Text>
            <Text style={styles.value}>458</Text>
          </View>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>Total enviado: </Text>
            <Text style={styles.value}>556</Text>
          </View>
          <View style={styles.keyAndValueView}>
            <Text style={styles.key}>Total recebido:</Text>
            <Text style={styles.value}>458</Text>
          </View>
        </View>
      </MainContentContainer>
    </Container>
  );
};

export default UserInfoScreen;
