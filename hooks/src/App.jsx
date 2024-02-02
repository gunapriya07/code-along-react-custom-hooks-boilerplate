import { useState } from 'react';
import './App.css'
import useStorage from './Hooks/useStorage';

function App() {
  const cssStyling = {
    style: { width: "60%", height: "70px", padding: "10px 20px", fontSize: "20px" }
  };
  const [storedValue, setStorage] = useStorage("storageKey", "");
  const [userInput, setUserInput] = useState(storedValue);
  
  const handleChange = (e) => {
    setUserInput(e.target.value);
    setStorage(e.target.value);
  };

  return (
    <>
      <h1>Learning Custom Hooks</h1>
      <input  type='text' placeholder='What on you mind...??' style={{width:"60%", height:"40px",padding:"10px 10px", fontSize:"20px"}} onChange={handleChange}/>
    </>
  );
}

export default App