import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createBook } from "../actions/booksAction";
import { Row, Col } from "react-bootstrap";
import BookForm from "../components/BookForm";

const CreateBook = ({ history, createNewBook }) => {
  const handleSubmit = (bookName) => {
    createNewBook(bookName);
    history.push("/");
  };
  return (
    <Row className="justify-content-center">
      <Col md="4">
        <BookForm onSubmit={handleSubmit} />
      </Col>
    </Row>
  );
};

const mapDispatchToProps = {
  createNewBook: createBook,
};

export default connect(null, mapDispatchToProps)(withRouter(CreateBook));
