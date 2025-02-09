import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css'

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog","gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)]; //animals[0] animals ตำแหน่งที่แบบสุ่ม
}

function App() {
  const [animals, setAnimal] = useState([]);
  const handleClick = () => {
    // [] click -> cat click -> bird
    setAnimal([...animals, getRandomAnimal()]);
  };
  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  return (
    <div className = "app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderAnimals}</div>
    </div>
  );
}

export default App;
