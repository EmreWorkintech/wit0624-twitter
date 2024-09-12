import axios from "axios";

export const getPosts = () => {
  return axios.get(
    "https://66e2b1ad494df9a478e2b0b5.mockapi.io/wit0624-twitter/api/v1/feeds"
  );
};

export const addPost = (post) => {
  return axios.post(
    "https://66e2b1ad494df9a478e2b0b5.mockapi.io/wit0624-twitter/api/v1/feeds",
    post
  );
};
