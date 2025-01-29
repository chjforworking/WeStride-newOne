function SearchBar({ onSubmit }) {
  const handleClick = () => {
    onSubmit('cars');
  };
  return (
    <div>
      <input />
      <button onClick={handleClick}>CLICK</button>
    </div>
  );
}

export default SearchBar;
