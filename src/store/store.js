import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { mainReducer } from "./reducers/mainReducer";
import { logger } from "redux-logger";

export const store = createStore(mainReducer, applyMiddleware(logger));
