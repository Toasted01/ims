import './App.css';
import Header from "./Components/Header.js"

function App() {
  return (
    <div className="App">
      <Header />
      <AddItem />
    </div>
  );
}

function AddItem() {
  return(
    <div>
      <br/>
      <label htmlFor="text-form">Add item: </label>
      <input type="text" id="text-form"></input>
    </div>
  )
}

export default App;
