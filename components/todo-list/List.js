import React from "react";
import ListElement from "./ListElement";

const List = (props) => {
  return props.items.map((item, index) => {
    return (
      <ListElement item={item} key={index} handleRemove={props.handleRemove} />
    );
  });
};

export default List;
