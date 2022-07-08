import { createContext } from "react";
import api from "../Services";

export const ApiContext = createContext([]);

export const ApiProvider = ({ children }) => {
  const token = localStorage.getItem("@churraskenzie:token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function getEvents() {
    return api
      .get("/events")
      .then((res) => res)
      .catch((err) => err);
  }
  function getEventsByUser(id) {
    return api
      .get(`/events?userId=${id}`)
      .then((res) => res)
      .catch((err) => err);
  }

  function createEvent(data) {
    return api
      .post("/combos", data)
      .then((res) => res)
      .catch((err) => err);
  }

  function patchEvent(data, id) {
    return api
      .patch(`/events/${id}`, data, config)
      .then((res) => res)
      .catch((err) => err);
  }
  function deleteEvent(data, id) {
    return api
      .delete(`/events/${id}`, config)
      .then((res) => res)
      .catch((err) => err);
  }
  function createCombo(data) {
    return api
      .post("/combos", data, config)
      .then((res) => res)
      .catch((err) => err);
  }
  function patchCombo(data, id) {
    return api
      .patch(`/combos/${id}`, data, config)
      .then((res) => res)
      .catch((err) => err);
  }
  function deleteCombo(id) {
    return api
      .delete(`/combos/${id}`, config)
      .then((res) => res)
      .catch((err) => err);
  }

  function getUser(id) {
    return api
      .get(`/users/${id}`)
      .then((res) => res)
      .catch((err) => err);
  }
  function loginUser(data) {
    return api
      .post("/login", data)
      .then((res) => res)
      .catch((err) => err);
  }

  function createUser(data) {
    return api
      .post("/register", data)
      .then((res) => res)
      .catch((err) => err);
  }
  return (
    <ApiContext.Provider
      value={{
        getEventsByUser,
        getEvents,
        createEvent,
        patchEvent,
        deleteEvent,
        createCombo,
        patchCombo,
        deleteCombo,
        getUser,
        loginUser,
        createUser,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
