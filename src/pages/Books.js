import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table, Button } from "react-bootstrap";
import DeleteBook from "../components/DeleteBook";

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <>
      <div className="mb-3 text-right">
        <Button as={Link} to="/create">
          Create Book
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <Link to={`/${item.id}/edit`} className="mr-2">
                  Edit
                </Link>
                <DeleteBook book={item} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Books;
