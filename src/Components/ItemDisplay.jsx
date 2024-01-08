/**
 * Recieves the current dataList array and maps each index in the array to the return function
 * return function displays jsx of the items data
 */
function ItemsDisplay({ itemsList, deleteItem }) {
  return (
    <div className="container">
      <div className="row">
        <h2>Inventory</h2>
      </div>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Type</th>
              <th scope="col">Brand</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {itemsList.map((item) => {
              return (
                <tr>
                  <th scope="row">#{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.type}</td>
                  <td>{item.brand}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteItem(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ItemsDisplay;
