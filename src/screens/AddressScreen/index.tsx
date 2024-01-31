import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import { Alert, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import QuestionText from "../../components/QuestionText";
import MuInput from "../../components/MuInput";
import styles from "./styles";
import MuButton from "../../components/MuButton";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";
import API from "../../api";
import api_routes from "../../api/api_routes";

interface Props {
  navigation: any;
  route: any;
}

type CountryType = {
  id: number;
  name: string;
  code: string;
  currency: string;
  createdAt: string;
  updatedAt: string;
};

const AddressScreen: React.FC<Props> = ({ navigation, route }) => {
  const { t } = useTranslation();
  const params = route.params;

  const [city, setCity] = useState<string>("");
  const [selectendCountry, setSelectendCountry] = useState<CountryType>({
    id: 0,
    name: "",
    code: "",
    currency: "",
    createdAt: "",
    updatedAt: "",
  });
  const [countriesList, setCountriesList] = useState<CountryType[]>([]);
  const [addresState, setAddressState] = useState<string>("");

  useEffect(() => {
    async function getCountriesList() {
      let countriesList: any[] = [];
      const response = await API.get(api_routes.GET_ALL_COUNTRIES);
      setCountriesList(response.data.res);
      // setCountriesList(response.data);
    }
    try {
      getCountriesList();
    } catch (error) {
      console.log(error);
      Alert.alert("There is an error when try to get countries list.");
    }
  }, []);

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContentContainer}
    >
      <ArrowBackButton onPress={() => navigation.goBack()} />
      <View style={styles.inputAndButtonView}>
        {/* <View style={styles.questionAndInputView}>
          <View style={styles.countriesPickerView}>
            <Picker
              style={styles.countriesPicker}
              selectedValue={country}
              onValueChange={(itemValue: string, _: number) => {
                setCountry(itemValue);
              }}
            >
              {countriesList.map((country) => (
                <Picker.Item
                  label={`${country.flag} ${country.name.common}`}
                  value={country.name.common}
                  key={country.name.common}
                />
              ))}
            </Picker>
          </View>

          <View style={styles.countriesPickerView}>
            <Picker
              style={styles.countriesPicker}
              selectedValue={country}
              onValueChange={(itemValue: string, _: number) => {
                setCountry(itemValue);
              }}
            >
              {countriesList.map((country) => (
                <Picker.Item
                  label={`${country.flag} ${country.name.common}`}
                  value={country.name.common}
                  key={country.name.common}
                />
              ))}
            </Picker>
          </View>

          <View style={styles.countriesPickerView}>
          <Picker
            style={styles.countriesPicker}
            selectedValue={selectendCountry.name}
            onValueChange={(itemValue: string, index: number) => {
              setSelectendCountry(countriesList[index]);
            }}
          >
            {countriesList.map((country) => (
              <Picker.Item
                label={country.name}
                value={country.name}
                key={country.code}
              />
            ))}
          </Picker>
        </View>

          
        </View>
        <MuButton
          text={t("Next")}
          onPress={() => {
            if (city && neighbourhood && country && addresState) {
              navigation.navigate("CreateAccountStack", {
                screen: "PasswordScreenCreate",
                params: {
                  ...params,
                  neighbourhood,
                  city,

                  addresState,
                  country,
                },
              });
            } else {
              Alert.alert(t("Completing all fields is mandatory"));
            }
          }}
        /> */}
      </View>
    </ScrollView>
  );
};

export default AddressScreen;
