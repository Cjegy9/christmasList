import React, { useState } from "react";

import SignIn from "../components/signin";
import SignUp from "../components/signup";

import {
  Container,
  TextField,
  Button,
  Typography,
  Paper
} from "@material-ui/core";

const Login = props => {
  return (
    <Container maxWidth="sm">
      <SignIn />
      <SignUp />
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
