import React from "react";
import { AsyncStorage } from "react-native";
import LoginForm from "./forms/LoginForm";

class Login extends React.Component {
  credintials;

  constructor(props) {
    super(props);
    this.credintials = { username: "", password: "" };
  }
  componentDidMount() {
    this.props.changeSignState(false);
    this.checkLoggedIn();
  }
  handlePasswordChange = (text) => {
    this.credintials.password = text;
  };
  handleUsernameChange = (text) => {
    this.credintials.username = text;
  };

  checkLoggedIn = async () => {
    try {
      let state = await AsyncStorage.getItem("login");
      state = JSON.parse(state);
      if (state) if (state.loggedIn) this.props.changeState(true);
    } catch (error) {
      console.log(error);
    }
  };
  handleLogin = async (ev) => {
    ev.preventDefault();
    let res = await fetch(
      "http://todoapp.ahmedrohym.com/api.php?apicall=login",
      {
        method: "POST",
        body: JSON.stringify(this.credintials),
      }
    );
    res = await res.json();
    if (res.user) {
      const login = JSON.stringify({
        user: res.user,
        loggedIn: true,
      });
      await AsyncStorage.setItem("login", login);
      this.props.changeState(true);
    }
    alert(res.message);
  };

  signup = () => {
    this.props.navigation.navigate("signup");
  };

  render() {
    return (
      <LoginForm
        handleLogin={this.handleLogin}
        handleUsernameChange={this.handleUsernameChange}
        handlePasswordChange={this.handlePasswordChange}
        signup={this.signup}
      />
    );
  }
}

export default Login;
