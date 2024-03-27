import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 5;
  const addValue = () => {
    setCounter((prevCount) => {
      return prevCount + 1;
    });
    setCounter((prevCount) => {
      return prevCount + 1;
    });
    setCounter((prevCount) => {
      return prevCount + 1;
    });
    setCounter((prevCount) => {
      return prevCount + 1;
    });
  };
  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Decrease value</button>
    </>
  );
}

export default App;
