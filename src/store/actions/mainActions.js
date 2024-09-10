export const ADD_POST = "add new post to the state";

export function addPost(post) {
  const postItem = {
    username: "EmreSahiner",
    address: "@emreSah",
    message: post,
    createdAt: new Date(),
    analytics: {
      comment: 0,
      reTweet: 0,
      like: 0,
    },
  };
  return {
    type: ADD_POST,
    payload: postItem,
  };
}
