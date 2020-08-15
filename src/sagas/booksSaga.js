import { takeLatest, put, all } from "redux-saga/effects";
import {
  CREATE_BOOK_REQUEST,
  CREATE_BOOK_SUCCESS,
  UPDATE_BOOK_REQUEST,
  UPDATE_BOOK_SUCCESS,
  DELETE_BOOK_REQUEST,
  DELETE_BOOK_SUCCESS,
} from "../actions/booksAction";

function* createBookAsync(action) {
  yield put({ ...action, type: CREATE_BOOK_SUCCESS });
}

function* updateBookAsync(action) {
  yield put({ ...action, type: UPDATE_BOOK_SUCCESS });
}

function* deleteBookAsync(action) {
  yield put({ ...action, type: DELETE_BOOK_SUCCESS });
}

export default function* watchBook() {
  yield all([
    takeLatest(UPDATE_BOOK_REQUEST, updateBookAsync),
    takeLatest(CREATE_BOOK_REQUEST, createBookAsync),
    takeLatest(DELETE_BOOK_REQUEST, deleteBookAsync),
  ]);
}
