import React, { useState } from "react";
import { Container, Button, TextField, Typography } from "@material-ui/core";

const ListItem = props => {
  const handleRemoveItem = () => props.removeItem(props.id, props.name);
  return (
    <Container style={{ display: "flex", alignItems: "center" }}>
      <Typography>{props.itemName}</Typography>
      <Button onClick={handleRemoveItem}>Remove</Button>
    </Container>
  );
};

export default ListItem;
