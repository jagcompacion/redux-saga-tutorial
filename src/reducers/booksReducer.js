import shortid from "shortid";
import {
  CREATE_BOOK_SUCCESS,
  UPDATE_BOOK_SUCCESS,
  DELETE_BOOK_SUCCESS,
} from "../actions/booksAction";

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK_SUCCESS:
      return [
        ...state,
        {
          id: shortid.generate(),
          name: action.name,
        },
      ];
    case UPDATE_BOOK_SUCCESS:
      return state.map((item) => {
        if (item.id === action.book.id) {
          return action.book;
        }
        return item;
      });
    case DELETE_BOOK_SUCCESS:
      return state.filter((item) => item.id !== action.bookId);
    default:
      return state;
  }
};

export default booksReducer;
