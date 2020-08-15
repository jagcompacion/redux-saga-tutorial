import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteBook } from "../actions/booksAction";

const DeleteBook = ({ book, removeBook }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    removeBook(book.id);
  };

  return (
    <Link to="/" onClick={handleSubmit}>
      Delete
    </Link>
  );
};

const mapDispatchToProps = {
  removeBook: deleteBook,
};

export default connect(null, mapDispatchToProps)(DeleteBook);
