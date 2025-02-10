import { useContext } from "react";
import BooksContext from "../context/book";

function useBooksContext() {
  //Custom Hooks
  return useContext(BooksContext);
}

export default useBooksContext;
