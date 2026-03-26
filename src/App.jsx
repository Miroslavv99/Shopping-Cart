import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  function handleName() {
    setName("Miroslav");
  }
  return (
    <>
      <button onClick={handleName}>Click</button>
      <h1>{name}</h1>
    </>
  );
}

export default App;
