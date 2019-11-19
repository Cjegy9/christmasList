import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { connect } from "react-redux";

const cookies = new Cookies();

import {
  Container,
  TextField,
  Button,
  Typography,
  Paper
} from "@material-ui/core";

const SignIn = props => {
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
    fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: username,
        password
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log("res", data);
        props.dispatch({ type: "LOGIN", payload: data });
        cookies.set("jwt", data.token, { path: "/" });
        //localStorage.setItem("jwt", data.token);
        //window.location.href = "/";
      });
  };

  const getMe = () => {
    const token = cookies.get("jwt");
    fetch("/api/users/me", {
      headers: {
        Authorization: "Bearer " + token
      }
    }).then(res => {
      console.log("res", res);
    });
  };

  return (
    <Paper style={{ display: "flex", flexDirection: "column", padding: 20 }}>
      <Typography component="h1" variant="h5">
        Sign in
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
          Login
        </Button>
        <Button variant="container" color="primary" onClick={() => getMe()}>
          Get Me
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

const mapStateToProps = (state, props) => {
  console.log("MAPPING", state, props);
  return {};
};

export default connect(mapStateToProps)(SignIn);
