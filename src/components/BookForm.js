import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const BookForm = ({ book = {}, onSubmit }) => {
  const [bookName, setBookName] = useState(book.name);
  const handleChange = (e) => {
    const { value } = e.target;
    setBookName(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(bookName);
  };
  return (
    <Row className="justify-content-center">
      <Col md="4">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              name="bookName"
              onChange={handleChange}
              value={bookName || ""}
            />
          </Form.Group>
          <Button type="submit">{book.id ? "Update" : "Create"} book</Button>
        </Form>
      </Col>
    </Row>
  );
};

export default BookForm;
