import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar.jsx";
import AddItem from "./Components/AddItem.jsx";
import ItemsDisplay from "./Components/ItemDisplay.jsx";

function App() {
  //Search filters state (expects an object)
  const [filters, setFilters] = useState({
    name: "",
    price: 0,
    type: "",
    brand: "",
  });
  //Add item data state (expects an object with an array of items)
  const [dataList, setData] = useState({ items: [] });

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((responseData) => {
        setData({ items: responseData });
      });
  }, []);

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
   * Posts to Json server
   * concats new data to array
   * updates state
   * @param {*} itemData
   */
  const addItemToData = (itemData) => {
    let items = dataList["items"]; //initially empty, then filled subsequently
    itemData.id = items.length + 1; //creates dynamic id based on array size starting at 1

    /**
     * Options for post request to add to json server
     * Body is a json stringify of itemData
     */
    const requestOptions = {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    };

    fetch("http://localhost:3000/items", requestOptions)
      .then((response) => response.json()) //response from server is the item data obj returned
      .then((responseData) => {
        items.push(responseData); //adds the response data to the new concat array
        setData({ items: items }); //calls setData to update the state to hold the new updated 'items' array
      });
  };

  /**
   * Takes an item as a parameter to delete
   * Performs a fetch delete request on the json server to delete the item at its id
   * Updates the local array of items
   * @param {*} item
   */
  const deleteItemData = (item) => {
    console.log(item);
    const items = dataList["items"];
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`https://localhost:3000/items/${item.id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          const idx = items.indexOf(item);
          items.splice(idx, 1);
          setData({ items: items });
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  /**
   * Creates array of filtered data
   * Checks if each data property is not equal to its default value
   * Checks to see if there is a matching property
   * returns all matching items via filteredData array
   * @param {*} data
   * @returns
   */
  const filterData = (data) => {
    const filteredData = [];

    // Check if no filters are provided or if all filters are empty
    if (Object.values(filters).every((value) => value === "" || value === 0)) {
      return data;
    }

    for (const item of data) {
      if (filters.name && item.name !== filters.name) {
        continue;
      }
      if (filters.price && item.price > filters.price) {
        continue;
      }
      if (filters.type && item.type !== filters.type) {
        continue;
      }
      if (filters.brand && item.brand !== filters.brand) {
        continue;
      }
      filteredData.push(item);
    }

    return filteredData;
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <SearchBar searchItem={updateFilters} />
        {/**Property 'searchItem' will be passed an object used in the updateFilters*/}
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemToData} />
        {/**Property 'addItem' will be passed an object used in the addItemToData*/}
      </div>
      <div className="row mt-3">
        <ItemsDisplay
          deleteItem={deleteItemData}
          itemsList={filterData(dataList["items"])}
        />
        {/**Property 'itemsList' will pass the current dataList array to ItemsDsiplay component through thr filterData function
         *Property 'deleteItem' will be passed an item object as a parameter of deleteItemData
         */}
      </div>
    </div>
  );
}

export default App;
