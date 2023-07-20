import { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

export const Card = ({ img, name, options, _id }) => {
  const priceRef = useRef();
  const data = useCart();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const dispatch = useDispatchCart();
  const finalPrice = qty * options[0][size];
  const handleAddToCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === _id) {
        food = item;
        break;
      }
    }
    // console.log(food);
    if (food !== []) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          payload: {
            id: _id,
            finalPrice,
            qty,
          },
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          payload: {
            id: _id,
            name,
            qty,
            size,
            finalPrice,
          },
        });
        return;
      }
    }
    await dispatch({
      type: "ADD",
      payload: {
        id: _id,
        name,
        qty,
        size,
        finalPrice,
      },
    });
    return;
    // console.log(data);
  };
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  // console.log(options[0]);
  return (
    <div
      className="card m-3 h-auto"
      style={{ width: "18rem", maxHeight: "360px" }}
    >
      <img
        src={img}
        className="card-img-top "
        alt="..."
        style={{ height: "40%" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {/* <p className="card-text">{description}</p> */}
        <div className="row">
          <select
            className="form-select m-1 w-25 col-5 bg-secondary text-light"
            onChange={(e) => setQty(e.target.value)}
          >
            {Array.from({ length: 6 }, (_, i) => (
              <option value={i + 1} key={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <select
            className="form-select m-1 w-50 col-5 bg-secondary text-light"
            onChange={(e) => setSize(e.target.value)}
            ref={priceRef}
          >
            {Object.keys(options[0]).map((optionItem) => {
              // console.log(option);
              return (
                <option value={optionItem} key={optionItem}>
                  {optionItem}
                </option>
              );
            })}

            {/* <option value="half">Half</option>
            <option value="full">Full</option> */}
          </select>
        </div>
        <div className="mt-1 fs-5">Total Price: {finalPrice}</div>
        <hr />
        <button
          className="btn btn-success bg-gradient"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
