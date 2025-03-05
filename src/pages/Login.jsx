import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { login } from "../services/Authservice";
import { Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../context/context";
import toast from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser();
  const handleLogin = async () => {
    try {
      const response = await login(username, password);

      console.log(response.data.message);
      if (response.data.message === "Incorrect Username") {
        toast.error("Invalid Credentials");
      } else {
        localStorage.setItem("authToken", true);
        localStorage.setItem("token", btoa(`${username}:${password}`));

        setUser({ username: { username }, password: { password } });

        toast.success("Logged In");
        navigate("/");
      }

      setUsername("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        value={username}
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        value={password}
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button variant="contained" onClick={handleLogin}>
        Submit
      </Button>
    </Box>
  );
};

export default Login;
