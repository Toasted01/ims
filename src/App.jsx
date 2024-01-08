import { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar.jsx";
import AddItem from "./Components/AddItem.jsx";
import ItemsDisplay from "./Components/ItemDisplay.jsx";

function App() {
  //Search filters state (expects an object)
  const [filters, setFilters] = useState({});
  //Add item data state (expects an object with an array of items)
  const [dataList, setData] = useState({ items: [] });

  /**
   * Called from SearchBar.jsx
   * Adds the search filters to the filters use state object
   * @param {*} searchFilters 
   */
  const updateFilters = (searchFilters) => {
    setFilters(searchFilters);
  };

  /**
   * Called from ItemDisplay.jsx
   * takes in data about the item to be added
   * assigns current 'data' array to 'items'
   * concats new data to array
   * updates state and logs array
   * @param {*} itemData 
   */
  const addItemToData = (itemData) => {
    let items = dataList["items"];//initially empty, then filled subsequently
    itemData.id = (items.length + 1);//creates dynamic id based on array size starting at 1
    items.push(itemData);//adds new item data to current list items data
    setData({ items: items });//calls set data to set the array in the state to the new concat array 'items'
    console.log(dataList);//logs the new array
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <SearchBar searchItem={updateFilters} />{/**Property 'searchItem' will be passed an object used in the updateFilters*/}
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemToData} />{/**Property 'addItem' will be passed an object used in the addItemToData*/}
      </div>
      <div className="row mt-3">
        <ItemsDisplay itemsList={dataList["items"]}/>{/**Property 'itemsList' will pass the current dataList array to ItemsDsiplay component*/}
      </div>
      
    </div>
  );
}

export default App;
