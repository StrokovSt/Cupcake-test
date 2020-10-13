import { combineReducers } from "redux";
import { booksReducer } from "./booksReducer";
import { loadReducer } from "./loadReducer";
import { modalReducer } from "./modalReducer";

export const rootReducer = combineReducers({
  books: booksReducer,
  load: loadReducer,
  modal: modalReducer
})