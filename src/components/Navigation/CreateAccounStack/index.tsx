import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NameScreen from "../../../screens/NameScreen";
import EmailScreen from "../../../screens/EmailScreen";
import PasswordScreen from "../../../screens/PasswordScreen";
import DocumentScreen from "../../../screens/DocumentScreen";
import DateScreen from "../../../screens/DateScreen";
import AddressScreen from "../../../screens/AddressScreen";

const signUpStackCreator = createStackNavigator();

const CreateAccountStack = () => {
  return (
    <signUpStackCreator.Navigator screenOptions={{ headerShown: false }}>
      <signUpStackCreator.Screen
        name="NameScreenCreate"
        component={NameScreen}
      />
      <signUpStackCreator.Screen
        name="EmailScreenCreate"
        component={EmailScreen}
      />
      <signUpStackCreator.Screen
        name="DocumentScreenCreate"
        component={DocumentScreen}
      />
      <signUpStackCreator.Screen
        name="DateScreenCreate"
        component={DateScreen}
      />
      <signUpStackCreator.Screen
        name="AddressScreenCreate"
        component={AddressScreen}
      />
      <signUpStackCreator.Screen
        name="PasswordScreenCreate"
        component={PasswordScreen}
      />
    </signUpStackCreator.Navigator>
  );
};

export default CreateAccountStack;
