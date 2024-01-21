import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../components/Container";
import { Picker } from "@react-native-picker/picker";
import MuIcon from "../../../assets/muIcon.png";
import WomanInitialScreenImage from "../../../assets/initialScrImage.png";
import { availableLanguages } from "../../services/translation/availableLanguages";
import { languageObject } from "../../types/general";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import MuButton from "../../components/MuButton";
import styles from "./styles";

interface Props {
  navigation: any;
}

const InitialScreen: React.FC<Props> = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  /* const languages: languageObject[] = [];
  availableLanguages.map((language) => {
    languages.push({ name: t(`${language.name}`), code: language.code });
  }); */

  const [selectedLanguage, setselectedLanguage] = useState<languageObject>(
    availableLanguages[0]
  );

  const changeLanguage = async (languageCode: string) => {
    try {
      await i18n.changeLanguage(languageCode);
    } catch (error) {
      console.log(error);
      Alert.alert(t("Unable to change language, try later"));
    }
  };

  useEffect(() => {
    changeLanguage(selectedLanguage.code);
  }, [selectedLanguage]);

  return (
    <Container background="#C9EFFF">
      <View style={styles.iconAndCountryButtonDiv}>
        <Image source={MuIcon} style={styles.muIcon} />
        <View style={styles.pickerView}>
          <Picker
            selectedValue={selectedLanguage.code}
            onValueChange={(intemValue: string, index: number): void => {
              setselectedLanguage(availableLanguages[index]);
            }}
          >
            {availableLanguages.map((language) => (
              <Picker.Item
                label={language.name}
                value={language.code}
                key={language.code}
              />
            ))}
          </Picker>
        </View>
      </View>

      <Text style={styles.sloganText}>{t("initial_phrase")}</Text>
      <Image
        resizeMode="stretch"
        style={styles.womanImage}
        source={WomanInitialScreenImage}
      />
      <View style={styles.beggingButtonDiv}>
        <MuButton
          text={t("start")}
          onPress={() =>
            navigation.navigate("CreateAccountStack", {
              screen: "NameScreenCreate",
              params: { type: 0 },
            })
          }
        />
      </View>

      <TouchableOpacity
        style={styles.goToLoginButton}
        onPress={() =>
          navigation.navigate("CreateAccountStack", {
            screen: "NameScreenCreate",
            params: { type: 1 },
          })
        }
      >
        <Text style={styles.goToLoginText}>{t("make_login")}</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default InitialScreen;
