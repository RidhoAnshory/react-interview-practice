import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <h4>{counter}</h4>
      <button onClick={increase}>Increase</button>
    </div>
  );
}
