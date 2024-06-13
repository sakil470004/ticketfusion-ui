

function Orders() {
  const tableDemoData=<>
     <tr>
              <th>1</th>
              <td>Bluetooth Headphones</td>
              <td>2</td>
              <td>$49.99</td>
              <td>1234 Main St, Cityville, Country</td>
              <td>12/16/2020</td>
              <td>Shipped</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Laptop Backpack</td>
              <td>1</td>
              <td>$29.99</td>
              <td>5678 Elm St, Townsville, Country</td>
              <td>12/5/2020</td>
              <td>Delivered</td>
            </tr>
  </>
  return (
    <div className="my-6 ">
      <h2 className="text-2xl font-bold text-orange-400 uppercase">
        Order list
      </h2>
      <div className="overflow-x-auto my-5">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Shipping Address</th>
              <th>Order Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {tableDemoData}
          {tableDemoData}
          {tableDemoData}
          {tableDemoData}
          {tableDemoData}
          {tableDemoData}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Shipping Address</th>
              <th>Order Date</th>
              <th>Status</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Orders;
