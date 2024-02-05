import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import { Alert, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import QuestionText from "../../components/QuestionText";
import styles from "./styles";
import MuButton from "../../components/MuButton";
import { useTranslation } from "react-i18next";
import API from "../../api";
import api_routes from "../../api/api_routes";
import { CityType, CountryType, SubregionType } from "../../types/adressTypes";

interface Props {
  navigation: any;
  route: any;
}

const AddressScreen: React.FC<Props> = ({ navigation, route }) => {
  const { t } = useTranslation();
  const params = route.params;
  const subregionInitialValue = {
    id: null,
    name: "no subregion",
    country: 0,
    createdAt: "",
    updatedAt: "",
  };

  const [selectendCountry, setSelectendCountry] = useState<CountryType>({
    id: 0,
    name: "",
    code: "",
    currency: "",
    createdAt: "",
    updatedAt: "",
  });
  const [selectedSubregion, setSelectedSubregion] = useState<SubregionType>(
    subregionInitialValue
  );
  const [selectedCity, setSelectedCity] = useState<CityType>({
    id: 0,
    name: "",
    subregion: 0,
    country: 0,
    createdAt: "",
    updatedAt: "",
  });
  const [countriesList, setCountriesList] = useState<CountryType[]>([]);
  const [subregionsList, setSubregionsList] = useState<SubregionType[]>([
    subregionInitialValue,
  ]);
  const [citiesList, setCitiesList] = useState<CityType[]>([]);
  const [filteredCitiesList, setFilteredCitiesList] = useState<CityType[]>([]);

  useEffect(() => {
    async function getCountriesList() {
      const response = await API.get(api_routes.GET_ALL_COUNTRIES);
      setCountriesList(response.data.res);
      setSelectendCountry(response.data.res[0]);
    }
    try {
      getCountriesList();
    } catch (error) {
      console.log(error);
      Alert.alert("There is an error when try to get countries list.");
    }
  }, []);

  useEffect(() => {
    async function getSubregionsAndCitiesByCountry() {
      const response = await API.get(
        `${api_routes.GET_ALL_SUBREGIONS_FROM_COUNTRY}/${selectendCountry.id}`
      );
      let newSubRegionsList = [subregionInitialValue].concat(response.data.res);
      setSubregionsList(newSubRegionsList);
      setSelectedSubregion(newSubRegionsList[0]);
      const response2 = await API.get(
        `${api_routes.GET_ALL_CITIES_FROM_COUNTRY}/${selectendCountry.id}`
      );
      setSelectedCity(response2.data.res[0]);
      setCitiesList(response2.data.res);
    }

    try {
      getSubregionsAndCitiesByCountry();
    } catch (error) {
      console.log(error);
    }
  }, [selectendCountry]);

  useEffect(() => {
    const subregionId: number | null = selectedSubregion.id;
    const citiesListFiltered = citiesList.filter(
      (city) => city.subregion === subregionId
    );
    setFilteredCitiesList(citiesListFiltered);
  }, [selectedSubregion]);

  return (
    <Container>
      <ArrowBackButton onPress={() => navigation.goBack()} />
      <View style={styles.inputAndButtonView}>
        <View style={styles.questionAndInputView}>
          <QuestionText
            question={t("What is the name of your country?")}
            fontSize={20}
          />
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
        <View style={styles.questionAndInputView}>
          <QuestionText
            question={"What is the name of your subregion? "}
            fontSize={20}
          />
          <View style={styles.countriesPickerView}>
            <Picker
              style={styles.countriesPicker}
              selectedValue={selectedSubregion.name}
              onValueChange={(itemValue: string, index: number) => {
                if (itemValue === "no subregion") {
                  setSelectedSubregion(subregionInitialValue);
                } else {
                  setSelectedSubregion(subregionsList[index]);
                }
              }}
            >
              {subregionsList.map((subregion) => (
                <Picker.Item
                  label={subregion.name}
                  value={subregion.name}
                  key={subregion.name}
                />
              ))}
            </Picker>
          </View>
        </View>
        <View style={styles.questionAndInputView}>
          <QuestionText
            question={t("What is the name of your city?")}
            fontSize={20}
          />
          <View style={styles.countriesPickerView}>
            <Picker
              style={styles.countriesPicker}
              selectedValue={selectedCity.name}
              onValueChange={(itemValue: string, index: number) => {
                setSelectedCity(filteredCitiesList[index]);
              }}
            >
              {filteredCitiesList.map((city) => (
                <Picker.Item
                  label={`${city.name}`}
                  value={city.name}
                  key={city.name}
                />
              ))}
            </Picker>
          </View>
        </View>
        <MuButton
          text={t("Next")}
          onPress={async () => {
            navigation.navigate("CreateAccountStack", {
              screen: "PasswordScreenCreate",
              params: {
                ...params,
                city: selectedCity,
                subregion: selectedSubregion,
                country: selectendCountry,
              },
            });
          }}
        />
      </View>
    </Container>
  );
};

export default AddressScreen;
