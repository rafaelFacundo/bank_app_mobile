import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import InitialScreen from "../../screens/InitialScreen";
import CreateAccountStack from "./CreateAccounStack";
import HomeScreen from "../../screens/HomeScreen";
import TransferScreen from "../../screens/transferScreen";

const MainStackCreator = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStackCreator.Navigator
        initialRouteName="InitialScreen"
        screenOptions={{ headerShown: false }}
      >
        <MainStackCreator.Screen
          name="InitialScreen"
          component={TransferScreen}
        />
        <MainStackCreator.Screen
          name="CreateAccountStack"
          component={CreateAccountStack}
        />
        <MainStackCreator.Screen name="HomeScreen" component={HomeScreen} />
      </MainStackCreator.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
