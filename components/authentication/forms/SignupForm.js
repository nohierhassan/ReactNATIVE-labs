import React from "react";
import { Dropdown } from "react-native-material-dropdown";
import styles from "./style";
import {
  Keyboard,
  Text,
  View,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";

const genders = [
  {
    value: "male",
  },
  {
    value: "female",
  },
];
const SignupForm = (props) => {
  return (
    <ScrollView keyboardShouldPersistTaps="always">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Signup, chivo? </Text>
            <TextInput
              placeholder="Username"
              placeholderColor="#c4c3cb"
              onChangeText={props.handleUsernameChange}
              style={styles.loginFormTextInput}
            />

            <TextInput
              placeholder="Email"
              placeholderColor="#c4c3cb"
              onChangeText={props.handleEmailChange}
              style={styles.loginFormTextInput}
            />

            <TextInput
              placeholder="Password"
              placeholderColor="#c4c3cb"
              onChangeText={props.handlePasswordChange}
              style={styles.loginFormTextInput}
              secureTextEntry={true}
            />

            <TextInput
              placeholder="Gender"
              placeholderColor="#c4c3cb"
              onChangeText={props.handleGenderChange}
              style={styles.loginFormTextInput}
            />

            <Button
              buttonStyle={styles.loginButton}
              onPress={props.handleSignup}
              title="Signup"
            />

            <Button
              buttonStyle={styles.loginButton}
              onPress={props.login}
              title="Already a user?"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default SignupForm;
