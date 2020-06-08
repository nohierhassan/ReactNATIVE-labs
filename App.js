import React from "react";
import { AsyncStorage } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AuthenticationScreens from "./components/authentication/AuthenticationScreens";
import ListStackScreen from "./components/todo-list/ListStack";
import ProfileStackScreen from "./components/profile/ProfileStack";
import Logout from "./components/authentication/Logout";

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginState: false,
      signState: false,
    };
  }

  changeLoginState = (state) => {
    this.setState({ loginState: state });
  };
  changeSignState = (state) => {
    this.setState({ signState: state });
  };
  handleLogout = async () => {
    await AsyncStorage.removeItem("login");
    this.changeLoginState(false);
  };

  TabsScreen = () => {
    return (
      <Tabs.Navigator>
        <Tabs.Screen name="list">
          {(props) => <ListStackScreen {...props} />}
        </Tabs.Screen>
        <Tabs.Screen name="profile">
          {(props) => <ProfileStackScreen {...props} />}
        </Tabs.Screen>
      </Tabs.Navigator>
    );
  };

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          {!this.state.loginState ? (
            <Drawer.Screen name="Authentication ">
              {(props) => (
                <AuthenticationScreens
                  {...props}
                  changeSignState={this.changeSignState}
                  changeLoginState={this.changeLoginState}
                  signState={this.state.signState}
                />
              )}
            </Drawer.Screen>
          ) : (
            <>
              <Drawer.Screen name="Home" component={this.TabsScreen} />
              <Drawer.Screen name="Logout">
                {(props) => (
                  <Logout {...props} handleLogout={this.handleLogout} />
                )}
              </Drawer.Screen>
            </>
          )}
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
