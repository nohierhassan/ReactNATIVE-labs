import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AsyncStorage, ScrollView } from "react-native";

import AddForm from "./AddForm";
import List from "./List";

const ListStack = createStackNavigator();

class ListStackScreen extends React.Component {
  state = {
    items: [],
  };

  componentDidMount = () => {
    this.getItemsFromStorage();
  };

  handleSubmit = (item) => {
    let tasks = this.state.items;
    tasks.push(item);
    this.setState({
      items: tasks,
    });
    this.setItemsInStorage();
  };

  handleRemove = (index) => {
    this.state.items.splice(index, 1);
    this.setState({
      items: this.state.items,
    });
    this.setItemsInStorage();
  };
  getItemsFromStorage = async () => {
    try {
      let items = (await AsyncStorage.getItem("items")) || [];
      if (items.length > 0) items = JSON.parse(items);
      this.setState({ items: items });
    } catch (error) {
      console.log(error);
    }
  };

  setItemsInStorage = async () => {
    if (this.state.items) items = JSON.stringify(this.state.items);
    try {
      await AsyncStorage.setItem("items", items);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <ListStack.Navigator>
        <ListStack.Screen name="list" options={{ title: "Todo List" }}>
          {(props) => (
            <Tasks
              {...props}
              items={this.state.items}
              handleRemove={this.handleRemove}
              handleSubmit={this.handleSubmit}
            />
          )}
        </ListStack.Screen>
      </ListStack.Navigator>
    );
  }
}

const Tasks = (props) => {
  return (
    <ScrollView keyboardShouldPersistTaps="always">
      <List items={props.items} handleRemove={props.handleRemove} />
      <AddForm handleSubmit={props.handleSubmit} />
    </ScrollView>
  );
};

export default ListStackScreen;
