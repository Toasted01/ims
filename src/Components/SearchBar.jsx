import { useState } from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  /**
   * Ran on search pressed
   * adds the new item object to props then resets input feilds to default
   */
  const searchPressed = () => {
    props.searchItem({ name: name, price: price, type: type, brand: brand });
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Search Inventory</h2>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="nameInput">Name: </label>
          <input
            className="form-control"
            id="nameInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col">
          <label htmlFor="priceInput">Price: </label>
          <input
            className="form-control"
            id="priceInput"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="col">
          <label htmlFor="typeInput">Type: </label>
          <input
            className="form-control"
            id="typeInput"
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        <div className="col">
          <label htmlFor="brandInput">Brand: </label>
          <input
            className="form-control"
            id="brandInput"
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-2">
		<div className="col-5" />
        	<button type="button" className="col-2 btn btn-primary" onClick={searchPressed}>
        	  Search
        	</button>
      </div>
    </div>
  );
}

export default SearchBar;
