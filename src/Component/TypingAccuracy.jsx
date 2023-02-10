import React, { useState, useEffect, useRef } from "react";

function TypingAccuracy() {
  const [word, setWord] = useState("");
  const [userInput, setUserInput] = useState("");
  const [accuracy, setAccuracy] = useState(0);

  const getData=()=>{
    fetch("https://random-word-api.herokuapp.com/word?number=1")
    .then((res) => res.json())
    .then((data) => setWord(data[0]))
    .catch((error) => console.error(error));
  }
  useEffect(() => {
     if(word == userInput){
      getData()
      // setAccuracy(100);
     }
     else if(word.length == userInput.length){
      setAccuracy(
        (calculateAccuracy(word, userInput) / word.length) * 100
        );
     }
  }, [word,userInput]);

  const handleTyping = (e) => {
    setUserInput(e.target.value);
  
  };

  const calculateAccuracy = (word, userInput) => {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (userInput[i] != word[i]) {
        count++;
      }
    
    }
    console.log("COUNT", count)
    let accuracy = word.length-count    
    return accuracy;
  };

  return (
    <div>
      <h2>{word}</h2>
      <input type="text" onKeyUp={handleTyping} />
      <p>Accuracy: {accuracy}%</p>
    </div>
  );
}
export default TypingAccuracy;