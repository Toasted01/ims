import { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar.jsx";
import AddItem from "./Components/AddItem.jsx";
import ItemsDisplay from "./Components/ItemDisplay.jsx";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchFilters) => {
    setFilters(searchFilters);
  };

  const addItemToData = (itemData) => {
    let items = data["items"];
    itemData.id = "#" + (items.length + 1);
    items.push(itemData);    
    setData({ items: items });
    console.log(data);
  };

  return (
    <div className="App">
      <SearchBar searchItem={updateFilters} />
      <br />
      <AddItem addItem={addItemToData} />
      <br />
      <ItemsDisplay items={data["items"]}/>
    </div>
  );
}

export default App;
