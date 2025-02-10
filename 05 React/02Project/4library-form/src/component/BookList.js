import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/book";

function BookList({ books, onDelete, onEdit }) {
  const value = useContext(BooksContext)
  const renderedBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} key={book.id} book={book} onDelete={onDelete} />
    );
  });
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
