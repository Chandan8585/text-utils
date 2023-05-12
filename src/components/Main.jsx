// import React, { useState } from 'react'

// const Main = () => {
//     const [text , setText] = useState(0);
//     const [word, setword] = useState(0);
//     const [letter, setLetter] = useState("");
//     const TextCounter = (event)=> {
//         const entry = event.target.value;
//          setText((entry.length -entry.split(" ").length) +1);
//          setword((-1 + entry.split(" ").length) + 1);
//     }
   
//     const ConvertToUpperCase = ()=> {
//          const upperCase = text.toUpperCase();
//          setLetter(upperCase);
//     }      
//   return (
//     <div className='main'>
//       <h1>Let's Play with Words</h1>
//       <textarea name="" id="" cols="1" rows="5"  onChange={(e)=> TextCounter(e)}>{letter}</textarea>
//       <div className="button">
//       <button className="upper-case btn1" onClick={ConvertToLowerCase}>Convert To Lower Case</button>
//       <button className="lower-case btn2"onClick={()=> ConvertToUpperCase} >Convert To Upper Case</button>
//       <h1 >{text + " letters " + word+ " words"}</h1>
//       </div>
//     </div>
//   )
// }

// export default Main;



import React, { useState } from 'react';

const Main = () => {
  const [text, setText] = useState('');
  const [word, setWord] = useState(0);

  const textCounter = (event) => {
    const entry = event.target.value;
    setText(entry);
    setWord(entry.split(' ').length);
  };

  const convertToUpperCase = () => {
    const upperCaseText = text.toUpperCase();
    setText(upperCaseText);
  };

  return (
    <div className="main">
      <h1>Let's Play with Words</h1>
      <textarea name="" id="" cols="1" rows="5" onChange={textCounter}></textarea>
      <div className="button">
        <button className="upper-case btn1" onClick={convertToUpperCase}>
          Convert To Upper Case
        </button>
        <button className="lower-case btn2">Convert To Lower Case</button>
        <h1>{text.length} letters, {word} words</h1>
      </div>
    </div>
  );
};

export default Main;
