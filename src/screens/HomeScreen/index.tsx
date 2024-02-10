import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import AccountArrowIcon from "../../../assets/accountArrowIcon.png";
import TransferMoneyIcon from "../../../assets/transferMoney_icon.png";
import PixIcon from "../../../assets/pix_logo_icon.png";
import CellPhoneIcon from "../../../assets/cellPhone_icon.png";
import CardIcon from "../../../assets/credit_icon.png";
import ContactsIcon from "../../../assets/contact_icon.png";
import Container from "../../components/Container";
import { styleConstants } from "../../Constants/Constants";
import Header from "./components/header";
import MainContentContainer from "../../components/mainContentContainer";
import styles from "./styles";
import OperationButton from "./components/operationButton";
import { State, TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  navigation: any;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const temporaryFunction = () => {};
  /*  const user = useSelector((state: any) => state.user); */
  const account = useSelector((state: any) => state.account);
  const address = useSelector((state: any) => state.address);

  return (
    <Container
      background={styleConstants.default_backgroundColor}
      justifyContent={"space-between"}
    >
      <Header navigation={navigation} />
      <MainContentContainer>
        <View style={styles.accountView}>
          <View style={styles.accountTextAndArrowView}>
            <Text style={styles.accountText}>Account </Text>
            <Image source={AccountArrowIcon} style={styles.accountArrowIcon} />
          </View>
          <Text style={styles.accountTextValue}>
            ${address.countryCurrency} {account.amount}
          </Text>
        </View>
        <View style={styles.buttonsView}>
          <OperationButton
            iconToShow={TransferMoneyIcon}
            onPressFunction={() =>
              navigation.navigate("TransferScreen", { params: "" })
            }
            size={70}
            backgroundColor={styleConstants.button_gray_background}
            label={"transferir"}
          />
        </View>
        <View style={styles.cardView}>
          <TouchableOpacity
            style={styles.cardButton}
            onPress={() => navigation.navigate("ContactScreen")}
          >
            <Image source={ContactsIcon} style={styles.cardImage} />
            <Text style={styles.cardText}>My Contacts</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blueLine}></View>
        <View style={styles.creditCardView}>
          <View style={styles.accountTextAndArrowView}>
            <Text style={styles.accountText}>Transfer history </Text>
            <Image source={AccountArrowIcon} style={styles.accountArrowIcon} />
          </View>
          <Text style={styles.accountTextValue}>Last transfer</Text>
          <Text style={styles.accountTextValue}>Received: R$ 125,25</Text>
          <Text style={styles.accountTextValue}>From: Jubiscleudo</Text>
        </View>
      </MainContentContainer>
    </Container>
  );
};

export default HomeScreen;
