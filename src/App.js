import logo from './logo.svg';
import './App.css';
import { Homepage } from './Component/Homepage';
import axios from 'axios';

function App() {


const options = {
  method: 'GET',
  url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
  params: {count: '5'},
  headers: {
    'X-RapidAPI-Key': '1ba1cfd69amsh1f2982a506326afp18aff0jsn2b1911e6d9f2',
    'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
  return (
    <div className="App">
      <h1>AAAAAAAAAAAa</h1>
      {/* <Homepage/> */}
    </div>
  );
}

export default App;
