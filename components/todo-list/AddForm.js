import React from "react";
import { StyleSheet, View , Button , TextInput  } from "react-native";

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }
  handleSubmit = (e) => {
    if (this.state.inputValue) {
      this.props.handleSubmit(this.state.inputValue);
      this.setState({
        inputValue: "",
      });
    }
  };

  handleChange = (text) => {
    this.setState({
      inputValue: text
    });
  };
  render() {
    return (
      <View style={styles.form}>
        <TextInput placeholder="new Task" onChangeText={this.handleChange} value={this.state.inputValue}/>
        <Button 
            onPress={this.handleSubmit}
            title="Add Task"
            color="blue"
            accessibilityLabel="add task"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
   marginTop: 10
  },
});
export default AddForm;
