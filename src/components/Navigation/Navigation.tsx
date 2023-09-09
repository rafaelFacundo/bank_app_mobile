import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import InitialScreen from "../../screens/InitialScreen";
import LoginStack from "./LoginStack";
import CreateAccountStack from "./CreateAccounStack";

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
          component={InitialScreen}
        />
        <MainStackCreator.Screen name="LoginStack" component={LoginStack} />
        <MainStackCreator.Screen
          name="CreateAccountStack"
          component={CreateAccountStack}
        />
        {/* <MainStackCreator.Screen name="NameScreen" component={NameScreen} />
      <MainStackCreator.Screen
        name="DocumentScreen"
        component={DocumentScreen}
      />
      <MainStackCreator.Screen name="EmailScreen" component={EmailScreen} />
      <MainStackCreator.Screen
        name="PasswordScreen"
        component={PasswordScreen}
      /> */}
      </MainStackCreator.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
