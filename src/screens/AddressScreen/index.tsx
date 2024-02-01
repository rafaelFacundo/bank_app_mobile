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

type SubregionType = {
  id: number;
  name: string;
  country: number;
  createdAt: string;
  updatedAt: string;
};

type CityType = {
  id: number;
  name: string;
  subregion: number | null;
  country: number;
  createdAt: string;
  updatedAt: string;
};

const AddressScreen: React.FC<Props> = ({ navigation, route }) => {
  const { t } = useTranslation();
  const params = route.params;
  const subregionInitialValue = {
    id: 0,
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
  const [subregionsList, setSubregionsList] = useState<SubregionType[]>([]);
  const [citiesList, setCitiesList] = useState<CityType[]>([]);
  const [filteredCitiesList, setFilteredCitiesList] = useState<CityType[]>([]);

  useEffect(() => {
    async function getCountriesList() {
      const response = await API.get(api_routes.GET_ALL_COUNTRIES);
      setCountriesList(response.data.res);
      // setCountriesList(response.data);
      setSelectendCountry(response.data.res[3]);
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
      console.log("subregions response list lenght");
      newSubRegionsList.forEach((sub) => {
        console.log(sub.name);
      });
      setSubregionsList(response.data.res);
      //setSelectedSubregion(response.data.res);

      const response2 = await API.get(
        `${api_routes.GET_ALL_CITIES_FROM_COUNTRY}/${selectendCountry.id}`
      );

      setCitiesList(response2.data.res);
    }

    try {
      getSubregionsAndCitiesByCountry();
    } catch (error) {
      console.log(error);
    }
  }, [selectendCountry]);

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContentContainer}
    >
      <ArrowBackButton onPress={() => navigation.goBack()} />
      <View style={styles.inputAndButtonView}>
        <View style={styles.questionAndInputView}>
          <View style={styles.countriesPickerView}>
            <Picker
              style={styles.countriesPicker}
              selectedValue={selectendCountry.name}
              onValueChange={(itemValue: string, index: number) => {
                setSelectendCountry(countriesList[index]);
                console.log("Vou printar as subregions");
                /* citiesList.forEach((city) => {
                  console.log(city.subregion);
                }); */
                subregionsList.forEach((sub) => {
                  console.log(sub);
                });
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

          {/*  <View style={styles.countriesPickerView}>
            <Picker
              style={styles.countriesPicker}
              selectedValue={selectedSubregion.name}
              onValueChange={(itemValue: string, index: number) => {
                //setSelectedSubregion(subregionsList[index]);
                console.log(itemValue);
                const subregionId = itemValue ? Number(itemValue) : null;
                // const filteredCitiesBySubregion = citiesList.filter(
                //   (city) => city.subregion === subregionId
                // );
              }}
            >
              {subregionsList.map((subregion) => (
                <Picker.Item
                  label={`${subregion.name}`}
                  value={subregion.id}
                  key={subregion.name}
                />
              ))}
              <Picker.Item label="no subregion" value={null} />
            </Picker>
          </View> */}

          {/* <View style={styles.countriesPickerView}>
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
          </View> */}
        </View>
        {/* <MuButton
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
