import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import bookReducer from "./bookReducer";

export default combineReducers({
  books: booksReducer,
  book: bookReducer,
});
