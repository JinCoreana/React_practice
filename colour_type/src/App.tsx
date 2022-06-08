import React, { useRef, useState } from 'react';
import './App.css';
import ColorCard from './ColorCard';
import InputCom from './InputCom';

function App() {

  const [color, setColor] = useState<string>('')
  const inputRef = useRef<string>('')
  
  const handleSubmit=(e: { preventDefault: () => void; })=>{
    e.preventDefault();
    setColor('')
  }
  return (
    <div className="App">
    <ColorCard color={color}/>
    <InputCom 
    color={color}
    setColor={setColor}
    handleSubmit={handleSubmit}
    inputRef={inputRef}/>
    </div>
  );
}

export default App;
