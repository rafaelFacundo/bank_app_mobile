import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import InitialScreen from "../../screens/InitialScreen";
import CreateAccountStack from "./CreateAccounStack";
import HomeScreen from "../../screens/HomeScreen";
import TransferScreen from "../../screens/transferScreen";
import UserInfoScreen from "../../screens/userInfoScreen";
import ContactsScreen from "../../screens/contactsScreen";

const MainStackCreator = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStackCreator.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
      >
        <MainStackCreator.Screen
          name="InitialScreen"
          component={InitialScreen}
        />
        <MainStackCreator.Screen
          name="CreateAccountStack"
          component={CreateAccountStack}
        />
        <MainStackCreator.Screen name="HomeScreen" component={HomeScreen} />
        <MainStackCreator.Screen
          name="UserInfoScreen"
          component={UserInfoScreen}
        />
        <MainStackCreator.Screen
          name="TransferScreen"
          component={TransferScreen}
        />
        <MainStackCreator.Screen
          name="ContactScreen"
          component={ContactsScreen}
        />
      </MainStackCreator.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
