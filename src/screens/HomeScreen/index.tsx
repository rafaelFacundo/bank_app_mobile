import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import AccountArrowIcon from "../../../assets/accountArrowIcon.png";
import TransferMoneyIcon from "../../../assets/transferMoney_icon.png";
import PixIcon from "../../../assets/pix_logo_icon.png";
import CellPhoneIcon from "../../../assets/cellPhone_icon.png";
import CardIcon from "../../../assets/credit_icon.png";
import Container from "../../components/Container";
import { styleConstants } from "../../Constants/Constants";
import Header from "./components/header";
import MainContentContainer from "./components/mainContentContainer";
import styles from "./styles";
import OperationButton from "./components/operationButton";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen: React.FC = () => {
  const temporaryFunction = () => {};
  /*  const user = useSelector((state: any) => state.user); */
  const account = useSelector((state: any) => state.account);

  return (
    <Container
      background={styleConstants.default_backgroundColor}
      justifyContent={"space-between"}
    >
      <Header />
      <MainContentContainer>
        <View style={styles.accountView}>
          <View style={styles.accountTextAndArrowView}>
            <Text style={styles.accountText}>CONTA </Text>
            <Image source={AccountArrowIcon} style={styles.accountArrowIcon} />
          </View>
          <Text style={styles.accountTextValue}>R$ {account.amount}</Text>
        </View>
        <View style={styles.buttonsView}>
          <OperationButton
            iconToShow={TransferMoneyIcon}
            onPressFunction={temporaryFunction}
            size={70}
            backgroundColor={styleConstants.button_gray_background}
            label={"transferir"}
          />
          <OperationButton
            iconToShow={PixIcon}
            onPressFunction={temporaryFunction}
            size={70}
            backgroundColor={styleConstants.button_gray_background}
            marginLeft={30}
            label={"Pix"}
          />
          <OperationButton
            iconToShow={CellPhoneIcon}
            onPressFunction={temporaryFunction}
            size={70}
            backgroundColor={styleConstants.button_gray_background}
            marginLeft={30}
            label={"recarga"}
          />
        </View>
        <View style={styles.cardView}>
          <TouchableOpacity style={styles.cardButton}>
            <Image source={CardIcon} style={styles.cardImage} />
            <Text style={styles.cardText}>Meus Cartões</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blueLine}></View>
        <View style={styles.creditCardView}>
          <View style={styles.accountTextAndArrowView}>
            <Text style={styles.accountText}>Cartão de crédito </Text>
            <Image source={AccountArrowIcon} style={styles.accountArrowIcon} />
          </View>
          <Text style={styles.accountTextValue}>Fatura atual</Text>
          <Text style={styles.accountTextValue}>R$ 125,25</Text>
        </View>
      </MainContentContainer>
    </Container>
  );
};

export default HomeScreen;
