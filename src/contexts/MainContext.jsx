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
  const [state, setState] = useState(initialState);

  const addPost = (post) => {
    setState({ ...state, posts: [post, ...state.posts] });
  };

  return (
    <MainContext.Provider value={{ state, addPost }}>
      {children}
    </MainContext.Provider>
  );
}
