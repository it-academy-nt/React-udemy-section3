import Clock from "./components/clock/clock";
import { calcFunc, Operation } from '../utils/calculations/utils'
import { useState, ChangeEvent } from "react";
import './App.css'


function App() {
  const name = "Jude";
  const birthYear = 1986;

    // State for managing input values
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [selectedOperation, setSelectedOperation] = useState<Operation>(Operation.Multiply);

  
    // Function to handle input1 change
    const handleInput1Change = (e: ChangeEvent<HTMLInputElement>) => {
      setInput1(Number(e.target.value));
    };
    
    // Function to handle input2 change
    const handleInput2Change = (e: ChangeEvent<HTMLInputElement>) => {
      setInput2(Number(e.target.value));
    };

      // Function to handle operation change
  const handleOperationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOperation(e.target.value as Operation);
  };

  return (
    <div>
      <h2>Let's get started! {name}. 
      You are {calcFunc.age(birthYear)} old and your name has {calcFunc.length(name)} letters</h2>

      <div className="calculator">
      <select value={selectedOperation} onChange={handleOperationChange}>
          {Object.values(Operation).map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </select>

        <label htmlFor="input1">Input 1</label>
          <input type="number" id="input1" defaultValue={input1} onChange={handleInput1Change} />

        <label htmlFor="input2">Input 2</label>
          <input type="number" id="input2" defaultValue={input2} onChange={handleInput2Change} />

        <p id="result">Result: {calcFunc.calc(input1, input2, selectedOperation)}</p>

      </div>
      <Clock />
    </div>
  );
}

export default App;
