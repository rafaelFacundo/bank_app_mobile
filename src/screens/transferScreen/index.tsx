import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import { Alert, Text, View } from "react-native";
import QuestionText from "../../components/QuestionText";
import MuInput from "../../components/MuInput";
import styles from "./styles";
import MuButton from "../../components/MuButton";
import API from "../../api";
import api_routes from "../../api/api_routes";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { decrementAmount } from "../../store/slices/accountSlice";

interface Props {
  navigation: any;
  route: any;
}

const TransferScreen: React.FC<Props> = ({ navigation, route }) => {
  const contact = route?.params?.params || "";
  const user = useSelector((state: any) => state.user);
  const address = useSelector((state: any) => state.address);
  const [amountToTransfer, setAmountToTransfer] = useState("");
  const [contactKey, setContactKey] = useState<string>(contact);
  const [receiverUserCurrency, setReceiverUserCurrency] = useState<string>("-");
  const [amountToTransferAfterConvertion, setAmountToTransferAfterConvertion] =
    useState<string>("");
  const [senderCurrencyValue, setSenderCurrencyValue] = useState(0);
  const [isUserActive, setIsUserActive] = useState<boolean>(false);
  const [receiver_userId, setReceiver_userId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    async function searchUserInDb() {
      const response = await API.get(
        `${api_routes.SEARCH_USER_BY_TRANSFER_KEY}/${contactKey}`
      );
      // console.log(response.data.userId);
      const userId = response.data.userId;
      setReceiver_userId(userId);
      const userResponse = await API.get(
        `${api_routes.VERIFY_IF_USER_IS_ACTIVE_BY_ID}/${userId}`
      );
      // console.log(userResponse.data);
      if (userResponse.data.is_active === true) {
        setIsUserActive(true);
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
          `https://api.currencybeacon.com/v1/convert?api_key=${apiKey}&from=${currency}&to=${address.countryCurrency}&amount=${amount}`
        );
        console.log(teste.data);
        setReceiverUserCurrency(currency);
        setAmountToTransferAfterConvertion(
          parseFloat(teste.data.response.value).toFixed(2)
        );
        const senderCurrency_Value = parseFloat(
          (amount / teste.data.response.value).toFixed(2)
        );
        setSenderCurrencyValue(senderCurrency_Value);
      } else {
        Alert.alert(
          "The user you want to transfer to is not active, please contact them."
        );
      }
    }
    if (contactKey.length === 15 && amountToTransfer != "") {
      searchUserInDb();
    }
  }, [contactKey, amountToTransfer]);

  const makeTransfer = async () => {
    try {
      const response = await API.post(api_routes.MAKE_TRANSFER, {
        userSenderId: user.id,
        userReceiverId: receiver_userId,
        amountToDiscount: parseFloat(amountToTransferAfterConvertion),
        amountToAdd: parseFloat(amountToTransfer),
      });
      console.log("response ", response.status);
      if (response.status === 200) {
        console.log("ENTREI NO IF");
        const saveTransactionResponse = await API.post(
          api_routes.SAVE_TRANSACTION,
          {
            sender: user.id,
            receiver: receiver_userId,
            amount: amountToTransferAfterConvertion,
            sender_currency: address.countryCurrency,
            receiver_currency: receiverUserCurrency,
            sender_currency_value: senderCurrencyValue,
          }
        );
        console.log(saveTransactionResponse.status);
        if (saveTransactionResponse.status === 200) {
          console.log("ENREI NO 2 IF");
          Alert.alert("Transação feita com sucesso!");
          setAmountToTransfer("");
          setContactKey("");
          setIsUserActive(false);
          dispatch(
            decrementAmount({
              value: parseFloat(amountToTransferAfterConvertion),
            })
          );
        }
      }
    } catch (error) {
      console.log("ERRROR", error);
    }
  };

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
          {amountToTransfer && isUserActive ? (
            <Text>
              Este usuário utiliza a moeda {receiverUserCurrency}, o valor
              descontado da sua conta após a conversão será de:
              {amountToTransferAfterConvertion}
            </Text>
          ) : (
            <Text>Por favor preencha todos os campos corretamente</Text>
          )}
        </View>
        {isUserActive && (
          <MuButton
            text={"Adicionar essa chave aos contatos"}
            onPress={() => {}}
          />
        )}
        <MuButton
          text={"transferir"}
          onPress={() => {
            if (amountToTransferAfterConvertion != "" && isUserActive) {
              makeTransfer();
            } else {
              Alert.alert("Preencha os campos corretamente");
            }
          }}
        />
      </View>
    </Container>
  );
};

export default TransferScreen;
