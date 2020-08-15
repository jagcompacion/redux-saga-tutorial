export const CREATE_BOOK_REQUEST = "CREATE_BOOK_REQUEST";
export const CREATE_BOOK_SUCCESS = "CREATE_BOOK_SUCCESS";
export const UPDATE_BOOK_REQUEST = "UPDATE_BOOK_REQUEST";
export const UPDATE_BOOK_SUCCESS = "UPDATE_BOOK_SUCCESS";
export const DELETE_BOOK_REQUEST = "DELETE_BOOK_REQUEST";
export const DELETE_BOOK_SUCCESS = "DELETE_BOOK_SUCCESS";

export const createBook = (name) => {
  return {
    type: CREATE_BOOK_REQUEST,
    name,
  };
};

export const updateBook = (book) => {
  return {
    type: UPDATE_BOOK_REQUEST,
    book,
  };
};

export const deleteBook = (bookId) => {
  return {
    type: DELETE_BOOK_REQUEST,
    bookId,
  };
};
