/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";
import { posts } from "../data";

export const MainContext = createContext();

const initialState = {
  posts: posts,
  user: null,
};

export function MainContextProvider({ children }) {
  const [state] = useState(initialState);
  return (
    <MainContext.Provider value={{ state }}>{children}</MainContext.Provider>
  );
}
