import { useState } from 'react'

const names = ["Ana", "Rodrigo", "Daniela", "Nicola"];

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleCount = () => {
        if(count === 0) setCount(count + 1)
    };

    const [name, setName] = useState(names[0]);
    const [nameIndex, setNameIndex] = useState(0);
    const handleName = () => {
        const nextIndex = (nameIndex + 1) % names.length;
        setName(names[nextIndex]);
        setNameIndex(nextIndex);
      };

  return (
    <>
    <button onClick={handleCount}>Count: {count}</button>
    <button id="namesBtn" onClick={handleName}>Names: {name}</button>
    </>

  )
}

export default Counter