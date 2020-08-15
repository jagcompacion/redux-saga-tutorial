import React from "react";
import { useParams, withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { updateBook } from "../actions/booksAction";
import { Row, Col } from "react-bootstrap";
import BookForm from "../components/BookForm";

const UpdateBook = ({ history, updateNewBook }) => {
  const { id } = useParams();
  const books = useSelector((state) => state.books);
  const book = books.find((item) => item.id === id) || {};

  const handleSubmit = (bookName) => {
    updateNewBook({
      id: book.id,
      name: bookName,
    });
    history.push("/");
  };
  return (
    <Row className="justify-content-center">
      <Col md="4">
        <BookForm book={book} onSubmit={handleSubmit} />
      </Col>
    </Row>
  );
};

const mapDispatchToProps = {
  updateNewBook: updateBook,
};

export default connect(null, mapDispatchToProps)(withRouter(UpdateBook));
