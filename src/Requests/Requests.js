import axios from "axios";

const api = "http://localhost:3500/api/";

export async function loginRequest(username, password) {
  let value;
  await axios
    .post(api + "accounts/login", { username, password })
    .then((response) => {
      value = response.data;
    })
    .catch((error) => {
      value = error.response.data;
    });
  return value;
}

export async function registrationRequest(username, password) {
  let value;
  await axios
    .post(api + "accounts/create", {
      username,
      password,
      date_registered: new Date(),
    })
    .then((response) => {
      value = response.data;
    })
    .catch((error) => {
      value = error.response.data;
    });
  return value;
}

export async function createRoomRequest(username) {
  let value;
  await axios
    .post(api + "rooms/create", {
      username,
    })
    .then((response) => {
      value = response.data;
    })
    .catch((error) => {
      value = error.response.data;
    });
  return value;
}

export async function joinRoomRequest(username, room_id) {
  let value;
  await axios
    .post(api + "rooms/join", {
      username,
      room_id
    })
    .then((response) => {
      value = response.data;
    })
    .catch((error) => {
      value = error.response.data;
    });
  return value;
}