import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  const { books } = useBooksContext(); //Custom Hooks

  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} /> //นี่เป็น props ที่ยังจำเป็นอยู่
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
