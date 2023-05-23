import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import { createRoomRequest, joinRoomRequest } from "../Requests/Requests";

export default function Room(props) {
  const [form, setForm] = useState("create");
  const [error, setError] = useState("");
  const [id, setId] = useState("");

  async function create(e) {
    setError("Loading...");
    e.preventDefault();
    let response = await createRoomRequest(props.user);
    if (response.error) {
      setError(response.error);
    } else {
      
      props.setRoom(response.room_id)
      setError("Room ID: "+response.room_id);
    }
  }

  async function join(e) {
    setError("Loading...");
    e.preventDefault();
    let response = await joinRoomRequest(props.user, id);
    if (response.error) {
      setError(response.error);
    } else {
      props.setJoin(true)
      props.setRoom(id)
      setError(response.message);
    }
  }
  return (
    <>
      <Box>
        <Text
          onClick={() => {
            setForm("create");
          }}
          className={form === "create" && "active"}
        >
          Create
        </Text>
        <Text
          onClick={() => {
            setForm("join");
          }}
          className={form === "join" && "active"}
        >
          Join
        </Text>
      </Box>
      {form === "create" ? (
        <Form onSubmit={create}>
          <FormHeading>Create</FormHeading>
          <Button>Create Game</Button>
        </Form>
      ) : (
        <Form onSubmit={join}>
          <FormHeading>Join</FormHeading>
          <Input
            onInput={(e) => {
              setId(e.target.value);
            }}
            type="text"
            placeholder="Room ID"
          />
          <Button>Join Game</Button>
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
