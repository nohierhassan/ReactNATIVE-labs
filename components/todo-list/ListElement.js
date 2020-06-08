import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { CheckBox } from "react-native-elements";

class ListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  toggle = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  handleRemove = () => {
    this.props.handleRemove(this.props.index);
  };

  render() {
    return (
      <View
        style={[
          styles.item,
          ,
          this.state.checked ? styles.checked : styles.unchecked,
        ]}
      >
        <Text
          style={[
            styles.text,
            this.state.checked ? styles.checked : styles.unchecked,
          ]}
        >
          {this.props.item}
        </Text>
        <CheckBox
          style={styles.check}
          center
          checked={this.state.checked}
          onPress={this.toggle}
        />
        <Button
          style={styles.btn}
          onPress={this.handleRemove}
          title="X"
          color="#841584"
          accessibilityLabel="Remove task"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginTop: 2,
    padding: 5,
    alignItems: "center",
  },
  checked: {
    backgroundColor: "orange",
    color: "#fff",
  },
  unchecked: {
    backgroundColor: "#AEAEAE",
    color: "#F00936",
  },
  text: {
    flex: 1,
    fontSize: 15,
    marginLeft: 5,
  },
  check: {
    flex: 1,
    position: "absolute",
  },
  btn: {
    flex: 1,
    position: "absolute",
  },
});
export default ListElement;
