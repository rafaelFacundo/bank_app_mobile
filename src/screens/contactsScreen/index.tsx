import React from "react";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import RightArrowIcon from "../../../assets/accountArrowIcon.png";
import styles from "./styles";
import { Image, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTranslation } from "react-i18next";

type Props = {
  navigation: any;
};

const ContactsScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <ArrowBackButton onPress={() => navigation.goBack()} />
      <ScrollView style={styles.scroll}>
        <View style={styles.contactView}>
          <View style={styles.keyAndValuesListView}>
            <View style={styles.keyValueView}>
              <Text style={styles.key}>{t("Name")}: </Text>
              <Text style={styles.value}>Vladmir</Text>
            </View>
            <View style={styles.keyValueView}>
              <Text style={styles.key}>{t("Transfer key")}: </Text>
              <Text style={styles.value}>dlahsdfalsihf</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("TransferScreen", {
                params: "lkdjalskdjalskj",
              })
            }
          >
            <Image source={RightArrowIcon} style={styles.arrowImage} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
};

export default ContactsScreen;
