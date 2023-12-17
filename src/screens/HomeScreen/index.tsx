import React from "react";
import { Text, View } from "react-native";
import Container from "../../components/Container";
import { styleConstants } from "../../Constants/Constants";
import Header from "./components/header";

const HomeScreen: React.FC = () => {
    return(
        <Container background={styleConstants.default_backgroundColor}>
            <Header />
            <Text>ASKDAHJSKDJAH</Text>
        </Container>
    ); 
}

export default HomeScreen;