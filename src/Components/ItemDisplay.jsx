function ItemsDisplay(props) {
  return (
    <div>
      {props.items.map((item) => {
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
