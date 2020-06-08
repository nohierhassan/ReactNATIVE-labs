import React from "react";
import SignupForm from "./forms/SignupForm";

class Signup extends React.Component {
  info;
  constructor(props) {
    super(props);
    this.info = { username: "", password: "", email: "", gender: "male" };
    this.failure = React.createRef();
  }

  handlePasswordChange = (pass) => {
    this.info.password = pass;
  };
  handleUsernameChange = (uname) => {
    this.info.username = uname;
  };
  handleGenderChange = (gender) => {
    this.info.gender = gender;
  };
  handleEmailChange = (email) => {
    this.info.email = email;
  };

  goToLogin = () => {
    this.props.navigation.navigate("login");
  };
  handleSignup = async (ev) => {
    ev.preventDefault();
    console.log(this.info);

    res = await fetch("http://todoapp.ahmedrohym.com/api.php?apicall=signup", {
      method: "POST",
      body: JSON.stringify(this.info),
    });
    res = await res.json();
    if(res.user){
     this.props.changeState(true);
    }
    alert(res.message)
  };
 
  render() {
    return (
      <SignupForm
        login={this.goToLogin}
        handleSignup={this.handleSignup}
        handleUsernameChange={this.handleUsernameChange}
        handlePasswordChange={this.handlePasswordChange}
        handleEmailChange={this.handleEmailChange}
        handleGenderChange={this.handleGenderChange}
      />
    );
  }
}

export default Signup;
