import { useState } from "react";
import BookCreate from "./component/BookCreate";
import BookList from "./component/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBook);
  };

  const createBook = (title) => {
    const updatedBook = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBook);
  };
  return (
    <div className="App">
      <BookList books={books} onDelete = {deleteBookById}/>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
