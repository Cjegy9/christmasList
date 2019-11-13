import React, { useState } from "react";

import { Container, TextField, Button, Typography } from "@material-ui/core";

const Login = props => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleUsernameChange = event => setUsername(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);

  return (
    <Container
      maxWidth="sm"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <TextField
        id="standard-basic"
        label="Username"
        margin="normal"
        onChange={handleUsernameChange}
      />
      <TextField
        id="standard-basic"
        label="Password"
        margin="normal"
        type="password"
        onChange={handlePasswordChange}
      />
      <Button color="primary" onClick={() => console.log(username, password)}>
        Login
      </Button>
    </Container>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center"
  }
};

export default Login;
