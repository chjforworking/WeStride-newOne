import { useState } from "react";
import "./SearchBar.css"

function SearchBar({ onSubmit }) {
  //useState
  const [term, setTerm] = useState("");

  //Event Handler
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  //Event Handler
  const handleOnChange = (event) => {
    setTerm(event.target.value);
  };

  //Event
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleOnChange} />
      </form>
    </div>
  );
}

export default SearchBar;
