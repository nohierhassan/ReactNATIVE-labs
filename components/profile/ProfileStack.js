import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Profile from "./profile";
const ProfileStack = createStackNavigator();

const ProfileStackScreen = (props) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="profile" options={{title: 'Profile'}}>
        {(props) => <Profile {...props} />}
      </ProfileStack.Screen>
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
