import React, { useState } from "react";

import {
  Container,
  TextField,
  Button,
  Typography,
  Paper
} from "@material-ui/core";

const SignUp = props => {
  const [username, setUsername] = useState(null);
  const [usernameError, setUsernameError] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [signinError, setSigninError] = useState(null);

  const handleUsernameChange = event => setUsername(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);
  const login = () => {
    username ? setUsernameError(null) : setUsernameError("Username Required");
    password ? setPasswordError(null) : setPasswordError("Password Required");
    if (!username || !password) {
      return;
    }
    console.log(username, password);
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Colin Eyster",
        email: username,
        password
      })
    }).then(res => {
      if (res.ok) {
        //window.location.href = "/";
      } else {
        setSigninError(res.statusText);
      }
    });
  };

  return (
    <Paper
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 20,
        marginTop: 20
      }}
    >
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <TextField
        id="standard-basic"
        label="Username"
        margin="normal"
        onChange={handleUsernameChange}
        error={!!usernameError}
        helperText={usernameError}
      />
      <TextField
        id="standard-basic"
        label="Password"
        margin="normal"
        type="password"
        onChange={handlePasswordChange}
        error={!!passwordError}
        helperText={passwordError}
      />
      <div style={{ marginTop: 20 }}>
        <Button variant="contained" color="primary" onClick={() => login()}>
          Sign Up
        </Button>
      </div>
    </Paper>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center"
  }
};

export default SignUp;
