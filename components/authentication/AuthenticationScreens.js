import React from "react";
import LoginForm from "./Login";
import SignupForm from "./Signup";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthenticationScreens = (props) => {
  const { changeLoginState, changeSignState, signState } = props;
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" options={{ title: "Log in" }}>
        {(props) => (
          <LoginForm
            {...props}
            changeState={(state) => changeLoginState(state)}
            changeSignState={(state) => changeSignState(state)}
          />
        )}
      </Stack.Screen>

      {!signState ? (
        <Stack.Screen name="signup" options={{ title: "Sign up" }}>
          {(props) => (
            <SignupForm
              {...props}
              changeState={(state) => changeSignState(state)}
            />
          )}
        </Stack.Screen>
      ) : (
        <></>
      )}
    </Stack.Navigator>
  );
};
export default AuthenticationScreens;
