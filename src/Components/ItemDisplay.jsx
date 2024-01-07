function ItemsDisplay(props) {

  /**
   * Recieves the current dataList array and maps each index in the array to the return function
   * return function displays jsx of the items data
   */
  return (
    <div>
      {props.itemsList.map((item) => {
        return (
          <p>
           ID: {item.id} | Name: {item.name} | Price: {item.price} | Type: {item.type} | Brand: {item.brand}
          </p>
        );
      })}
    </div>
  );
}
export default ItemsDisplay;
