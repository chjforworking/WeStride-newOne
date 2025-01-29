import searchImg from "./Api";
import SearchBar from "./components/SearchBar";

function App() {
  const handleSubmit = (term) => {
    console.log("Search With", term);
    searchImg(term);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
