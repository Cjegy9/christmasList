import React, { useState } from "react";
import { Container, Button, TextField } from "@material-ui/core";

const AddItem = props => {
  const [name, setName] = useState(null);

  const handleNameChange = event => setName(event.target.value);
  const handleAddItem = () => props.onAddItem(name);

  return (
    <Container style={{ display: "flex", alignItems: "center" }}>
      <TextField
        id="standard-basic"
        label="Item Name"
        margin="normal"
        onChange={handleNameChange}
      />
      <Button onClick={handleAddItem}>Add to List</Button>
    </Container>
  );
};

export default AddItem;
