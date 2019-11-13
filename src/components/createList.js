import React, { useState } from "react";
import { Typography, TextField, List } from "@material-ui/core";

import AddItem from "./addItem";
import ListItem from "./listItem";

const CreateList = props => {
  const [items, setItems] = useState([]);

  const handleAddItem = itemName =>
    setItems(currentItems => [...currentItems, itemName]);

  const handleRemoveItem = itemIndex =>
    setItems(currentItems => {
      const tempItems = [...currentItems];
      tempItems.splice(itemIndex, 1);
      return tempItems;
    });

  return (
    <div>
      <Typography>Create List</Typography>
      <AddItem onAddItem={handleAddItem} />
      {items.map((item, index) => (
        <ListItem itemName={item} id={index} removeItem={handleRemoveItem} />
      ))}
    </div>
  );
};

export default CreateList;
