import './App.css';
import Header from "./Components/Header.js"
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header h1="Inventory Management System" p="Manage your inventory pleb"/>
      <ButtonState/>
    </div>
  );
}

function ButtonState() {
const [title, setTitle] = useState("");
const [count, setCount] = useState(0);

const updateTitleClick = () => {
  setTitle("Le' title");
}

const updateCounterClick = () => {
  setCount(count+1);
}

  return(
    <div>
      <Data title={title} count={count}/>
      <button onClick={updateTitleClick}>Update Title</button>
      <button onClick={updateCounterClick}>Update Counter</button>
    </div>
  )
}

function Data(props){
return(<div>
  <p>Title: {props.title}</p>
  <p>Count: {props.count}</p>
</div>)
}

export default App;
