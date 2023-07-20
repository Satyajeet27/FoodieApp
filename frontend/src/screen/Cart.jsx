import { useCart, useDispatchCart } from "../components/ContextReducer";

export const Cart = () => {
  const data = useCart();
  const dispatch = useDispatchCart();
  //   console.log(data);
  if (data.length === 0) {
    return (
      <div className="container mt-2">
        <h4 className="text-center">This Cart is Empty</h4>
      </div>
    );
  }
  let totalPrice = data.reduce((total, food) => total + food.finalPrice, 0);
  //   console.log(totalPrice);
  const handleCheckOut = async () => {
    const response = await fetch("http://localhost:5000/api/orderData", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("user_email"),
        order_data: data,
        order_date: new Date().toDateString(),
      }),
    });
    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
    console.log(await response.json());
  };
  return (
    <div className="container table-responsive">
      <table className="table table-hover table-sm border">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Option</th>
            <th scope="col">Amount</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row" className="fw-normal">
                  {index + 1}.
                </th>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.size}</td>
                <td>{item.finalPrice}</td>
                <td>
                  <i
                    className="fa-solid fa-trash-can "
                    style={{ color: " #ff0000" }}
                    onClick={() =>
                      dispatch({
                        type: "REMOVE",
                        payload: {
                          id: item.id,
                        },
                      })
                    }
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="fs-6">Total Price: {totalPrice}</div>
      <button
        type="button"
        className="btn btn-sm mt-2 btn-success bg-gradient"
        onClick={handleCheckOut}
      >
        Check Out
      </button>
    </div>
  );
};
