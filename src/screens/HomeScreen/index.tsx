import React from "react";
import { Image, Text, View } from "react-native";
import AccountArrowIcon from "../../../assets/accountArrowIcon.png";
import Container from "../../components/Container";
import { styleConstants } from "../../Constants/Constants";
import Header from "./components/header";
import MainContentContainer from "./components/mainContentContainer";
import styles from "./styles";

const HomeScreen: React.FC = () => {
    return(
        <Container background={styleConstants.default_backgroundColor} justifyContent={"space-between"}>
                <Header />
                <MainContentContainer>
                    <View style={styles.accountView}>
                        <View style={styles.accountTextAndArrowView}>
                            <Text style={styles.accountText} >CONTA </Text>
                            <Image source={AccountArrowIcon} style={styles.accountArrowIcon}/>
                        </View>
                        <Text style={styles.accountTextValue}>R$ 125,25</Text>
                    </View>
                </MainContentContainer>
        </Container>
    ); 
}

export default HomeScreen;