import { ADD_POST } from "../actions/mainActions";

const initialState = {
  posts: [],
  user: null,
};

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [action.payload, ...state.posts] };
    default:
      return state;
  }
}
