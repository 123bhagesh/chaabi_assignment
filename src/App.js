import logo from './logo.svg';
import './App.css';
import { Homepage } from './Component/Homepage';
import axios from 'axios';
import Timer from './Component/Count-Down/Timer';
import Accuracy from './Component/TypingAccuracy';
import { NewAcc } from './Component/NewAcc';
import TypingAccuracy from './Component/TypingAccuracy';


function App() {


// const options = "https://random-word-api.herokuapp.com/word"

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
  return (
    <div className="App">
      <Homepage/>
      <Timer/>
      {/* <Accuracy/> */}
      {/* <NewAcc/> */}
      {/* <TypingAccuracy/> */}
      
      
    </div>
  );
}

export default App;
