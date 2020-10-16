import { combineReducers } from "redux";
import  booksListSlice  from "./booksSlice";
import  purchasesSlise  from "./purchasesSlice";
import  modalBookSlice  from "./modalSlice";

export const rootReducer = combineReducers({
  books: booksListSlice,
  purchases: purchasesSlise,
  modal: modalBookSlice
})