import { useEffect, useState } from "react";

export const MyOrder = () => {
  const [data, setData] = useState(null);
  const fetchMyOrder = async () => {
    const response = await fetch("http://localhost:5000/api/myOrderData", {
      headers: {
        "content-type": "application/json",
        user_email: localStorage.getItem("user_email"),
      },
    });
    const result = await response.json();
    setData(result.orderData);
  };
  useEffect(() => {
    fetchMyOrder();
  }, []);

  console.log(data);

  return (
    // <div>
    //   {data &&
    //     data.map((item) => {
    //       const { Order_date } = item;
    //       return (
    //         <div className="container mb-3 border">
    //           {Object.values(item).map((order) => {
    //             const { name, qty, size, finalPrice } = order;

    //             return (
    //               order.length > 0 && (
    //                 <div className="card " style={{ height: "100%" }}>
    //                   <div className="card-title">{name}</div>
    //                   <div className="card-body d-flex">
    //                     <p>{qty}</p>
    //                     <p>{size}</p>
    //                     <p>{finalPrice}</p>
    //                   </div>
    //                   <h5>{Order_date}</h5>
    //                 </div>
    //               )
    //             );
    //           })}
    //         </div>
    //       );
    //     })}
    // </div>
    <div className="container" style={{ marginTop: "6rem" }}>
      {data ? (
        data.map((item) => {
          return (
            <div className="mt-4">
              {item.map((order, index) => {
                return (
                  <div>
                    {order.Order_date ? (
                      <div>
                        {order.Order_date} <hr className="mt-0" />
                      </div>
                    ) : (
                      <div>
                        <div className="border rounded p-3 d-flex justify-content-between w-50 mb-2">
                          <div>
                            <h4>{order.name}</h4>
                            <div>
                              <span className="me-3">Qty: {order.qty}</span>
                              <span>Size: {order.size}</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="fs-5">Total </div>
                            <div className="fs-5">{order.finalPrice}</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })
      ) : (
        <div className="container mt-5 text-center fs-3 fw-bold">
          It seems, you have't ordered yet
        </div>
      )}
    </div>
  );
};
