import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NameScreen from "../../../screens/NameScreen";
import PasswordScreen from "../../../screens/PasswordScreen";
import DocumentScreen from "../../../screens/DocumentScreen";
import EmailScreen from "../../../screens/EmailScreen";

const LoginStackCreator = createStackNavigator();

const LoginStack = () => {
  return (
    <LoginStackCreator.Navigator screenOptions={{ headerShown: false }}>
      <LoginStackCreator.Screen name="NameScreen" component={NameScreen} />
      <LoginStackCreator.Screen
        name="DocumentScreen"
        component={DocumentScreen}
      />
      <LoginStackCreator.Screen name="EmailScreen" component={EmailScreen} />
      <LoginStackCreator.Screen
        name="PasswordScreen"
        component={PasswordScreen}
      />
    </LoginStackCreator.Navigator>
  );
};

export default LoginStack;
