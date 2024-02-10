import React from "react";
import Container from "../../components/Container";
import ArrowBackButton from "../../components/ArrowBack";
import RightArrowIcon from "../../../assets/accountArrowIcon.png";
import styles from "./styles";
import { Image, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  navigation: any;
};

const ContactsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <Container>
      <ArrowBackButton onPress={() => navigation.goBack()} />
      <ScrollView style={styles.scroll}>
        <View style={styles.contactView}>
          <View style={styles.keyAndValuesListView}>
            <View style={styles.keyValueView}>
              <Text style={styles.key}>Nome: </Text>
              <Text style={styles.value}>Vladmir</Text>
            </View>
            <View style={styles.keyValueView}>
              <Text style={styles.key}>chave transferência: </Text>
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
