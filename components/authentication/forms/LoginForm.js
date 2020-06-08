import React from "react";
import styles from "./style";
import {Keyboard, Text, View,Button, TextInput, TouchableWithoutFeedback , ScrollView} from 'react-native';
const LoginForm = (props) => {
  return (
    <ScrollView keyboardShouldPersistTaps='always'>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.loginScreenContainer}>
        <View style={styles.loginFormView}>
        <Text style={styles.logoText}>Login, parce? </Text>
          <TextInput
            placeholder="Username" 
            onChangeText={(text)=>props.handleUsernameChange(text)}
            placeholderColor="#c4c3cb" 
            style={styles.loginFormTextInput}
          />
          <TextInput 
            placeholder="Password" 
            onChangeText={(text)=>props.handlePasswordChange(text)} 
            placeholderColor="#c4c3cb" style={styles.loginFormTextInput} 
            secureTextEntry={true}
          />
          
          <Button
            buttonStyle={styles.loginButton}
            onPress={props.handleLogin}
            title="Login"
          />
          <Button
            buttonStyle={styles.loginButton}
            onPress={props.signup}
            title="Register instead?"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
    </ScrollView>
  );
};
export default LoginForm;
