import React, { useState } from "react";
import Keyboard from "./components/Keyboard";
import Editor from "./components/Editor";

export default function App() {
  const [text, setText] = useState(""); 

  const handleKeyClick = (key) => {
    setText(prev => prev + key); 
  };

  return (
    <div>
      <Editor text={text} />
      <Keyboard handleKeyClick={handleKeyClick} />
    </div>
  );
}


// import react,{ useState } from 'react'
// import './App.css'
// import Keyboard from './components/Keyboard.jsx'
// import Editor from './components/Editor.jsx'

// function App() {
//   // const [count, setCount] = useState(0)
//   return (
//     <>
//     <Keyboard/>
//     <Editor/>
//     </>
//   )
// }

// export default App