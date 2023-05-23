import React, { useState } from "react";
import { styled } from "styled-components";
import { loginRequest, registrationRequest } from "../Requests/Requests";

export default function Landing(props) {
  const [form, setForm] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  async function login(e) {
    setError("Loading...");
    e.preventDefault();
    let response = await loginRequest(username, password);
    if (response.error) {
      setError(response.error);
    } else {
      props.setUser(username);
      setError(response.message);
    }
  }

  async function register(e) {
    setError("Loading...");
    e.preventDefault();
    if (password !== password2) {
      setError("Passwords do not match");
    } else {
      let response = await registrationRequest(username, password);
      if (response.error) {
        setError(response.error);
      } else {
        props.setUser(username);
        setError(response.message);
      }
    }
  }

  return (
    <>
      <Box>
        <Text
          onClick={() => {
            setForm("login");
          }}
          className={form === "login" && "active"}
        >
          Login
        </Text>
        <Text
          onClick={() => {
            setForm("register");
          }}
          className={form === "register" && "active"}
        >
          Register
        </Text>
      </Box>
      {form === "login" ? (
        <Form onSubmit={login}>
          <FormHeading>Login</FormHeading>
          <Input
            onInput={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            placeholder="username"
          />
          <Input
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="password"
          />
          <Button>Login</Button>
        </Form>
      ) : (
        <Form onSubmit={register}>
          <FormHeading>Register</FormHeading>
          <Input
            onInput={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            placeholder="username"
          />
          <Input
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="password"
          />
          <Input
            onInput={(e) => {
              setPassword2(e.target.value);
            }}
            type="password"
            placeholder="Repeat password"
          />
          <Button>Register</Button>
        </Form>
      )}
      <Error>{error}</Error>
    </>
  );
}

const Form = styled.form`
  width: 320px;
  border: 1px solid white;
  padding: 20px 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  gap: 20px;
  align-items: center;
`;
const Box = styled.form`
  width: 320px;
  padding: 15px 0px;
  display: flex;
  justify-content: space-evenly;
`;

const Text = styled.p`
  font-size: 20px;
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: center;
  cursor: pointer;
`;
const Error = styled.p`
  font-size: 20px;
  color: #dd074b;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: center;
`;
const FormHeading = styled.p`
  font-size: 30px;
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: center;
`;

const Input = styled.input`
  padding: 5px;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  font-size: 20px;
  background: transparent;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  width: fit-content;
  border-radius: 10px;
  border: 1px solid white;
  background: transparent;
  cursor: pointer;
  display: block;
  color: white;
  font-size: 20px;
`;
