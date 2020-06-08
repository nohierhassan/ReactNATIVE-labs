import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const Logout = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        We are waiting for you to come back soon, amigo
      </Text>
      <Button
        style={{ marginBottom: 15 }}
        onPress={props.handleLogout}
        title="Logout"
      />
      <Button
        onPress={() => props.navigation.navigate("Home")}
        title="Back home"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  message: {
    marginBottom: 30,
    padding: 20,
    textAlign: "center",
    fontSize: 20,
  },
});
export default Logout;
