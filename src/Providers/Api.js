import { createContext } from "react";
import api from "../Services";

export const ApiContext = createContext([]);

export const ApiProvider = ({ children }) => {
  function enterLoginApi(data) {
    return api
      .post("/login", data)
      .then((res) => res)
      .catch((err) => err);
  }

  function registerApi(data) {
    return api
      .post("/register", data)
      .then((res) => res)
      .catch((err) => err);
  }
  return (
    <ApiContext.Provider value={{ enterLoginApi , registerApi }}>
      {children}
    </ApiContext.Provider>
  );
};
