import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import { Text, View } from "react-native";
import QuestionText from "../../components/QuestionText";
import MuInput from "../../components/MuInput";
import styles from "./styles";
import MuButton from "../../components/MuButton";
import API from "../../api";
import api_routes from "../../api/api_routes";
import axios from "axios";

interface Props {
  navigation: any;
  route: any;
}

const TransferScreen: React.FC<Props> = ({ navigation, route }) => {
  const contact = route?.params?.params || "";
  const [amountToTransfer, setAmountToTransfer] = useState("");
  const [contactKey, setContactKey] = useState<string>(contact);
  const [receiverUserCurrency, setReceiverUserCurrency] = useState<string>("-");
  const [amountToTransferAfterConvertion, setAmountToTransferAfterConvertion] =
    useState<string>("");
  const apiKey = "75Xt3xs5Mzt5k1NIJ8PkMjqBK1YDI5sq";

  useEffect(() => {
    console.log("enter");
    async function searchUserInDb() {
      const response = await API.get(
        `${api_routes.SEARCH_USER_BY_TRANSFER_KEY}/${contactKey}`
      );
      // console.log(response.data.userId);
      const userId = response.data.userId;
      const userResponse = await API.get(
        `${api_routes.VERIFY_IF_USER_IS_ACTIVE_BY_ID}/${userId}`
      );
      // console.log(userResponse.data);
      if (userResponse.data.is_active === true) {
        const addressResponse = await API.get(
          `${api_routes.GET_ADDRESS_BY_USER_ID}/${userId}`
        );
        // console.log(addressResponse.data.userAddress.country);
        const userCountryId = addressResponse.data.userAddress.country;
        const countryCurrencyResponse = await API.get(
          `${api_routes.GET_COUNTRY_CURRENCY_BY_ID}/${userCountryId}`
        );
        console.log(countryCurrencyResponse.data.currency);
        const currency = countryCurrencyResponse.data.currency;

        const amount = parseFloat(amountToTransfer);
        console.log(amount);
        const teste = await axios.get(
          `https://api.currencybeacon.com/v1/convert?api_key=${apiKey}&from=${currency}&to=BRL&amount=${amount}`
        );
        console.log(teste.data);
        setReceiverUserCurrency(currency);
        setAmountToTransferAfterConvertion(
          parseFloat(teste.data.response.value).toFixed(2)
        );
      } else {
      }
    }
    if (contactKey.length === 15) {
      searchUserInDb();
    }
  }, [contactKey]);

  return (
    <Container>
      <ArrowBackButton onPress={() => navigation.goBack()} />
      <View style={styles.inputAndButtonView}>
        <View style={styles.questionAndInputView}>
          <View style={styles.questionText}>
            <QuestionText
              fontSize={30}
              question={"Quanto você deseja transferir?"}
            />
          </View>
          <View style={styles.inputView}>
            <MuInput
              setState={setAmountToTransfer}
              state={amountToTransfer}
              amountMode={true}
            />
          </View>
        </View>
        <View style={styles.questionAndInputView}>
          <View style={styles.questionText}>
            <QuestionText
              fontSize={30}
              question={"Digite a chave do destinatário:"}
            />
          </View>
          <View style={styles.inputView}>
            <MuInput setState={setContactKey} state={contactKey} />
          </View>
        </View>
        <View>
          <Text>
            Este usuário utiliza a moeda {receiverUserCurrency}, o valor
            descontado da sua conta após a conversão será de:
            {amountToTransferAfterConvertion}
          </Text>
        </View>
        <MuButton text={"transferir"} onPress={() => {}} />
      </View>
    </Container>
  );
};

export default TransferScreen;
