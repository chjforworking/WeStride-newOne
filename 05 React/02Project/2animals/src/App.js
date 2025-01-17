function App() {
    const handleClick = ()=>{
        console.log("Hello");
        
    }
  return (
    <div>
      <button onClick={handleClick}>Click to add more animal</button>
    </div>
  );
}

export default App;