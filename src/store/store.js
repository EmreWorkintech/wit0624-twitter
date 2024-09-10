import { legacy_createStore as createStore } from "redux";
import { mainReducer } from "./reducers/mainReducer";

export const store = createStore(mainReducer);
