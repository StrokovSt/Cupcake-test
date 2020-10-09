import { combineReducers } from "redux";
import { booksReducer } from "./booksReducer";
import { loadReducer } from "./loadReducer";

export const rootReducer = combineReducers({
  books: booksReducer,
  load: loadReducer
})