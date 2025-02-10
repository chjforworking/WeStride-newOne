import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
  const { deleteBookById } = useBooksContext();
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };
  const handleSubmit = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit === true) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />{" "}
      {/*book.id เป็น string เฉยๆ ถ้าใส่แล้วมันจะ random url ได้*/}
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleSubmit}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
