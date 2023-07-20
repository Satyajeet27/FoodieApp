import { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      //   console.log(state);
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((item) => item.id !== action.payload.id);
    case "UPDATE":
      let arr = [...state];
      arr.find((food, index) => {
        console.log(food);
        if (food.id === action.payload.id) {
          console.log(
            food.qty,
            parseInt(action.payload.qty),
            action.payload.finalPrice,
            food.finalPrice
          );
          arr[index] = {
            ...food,
            qty: parseInt(action.payload.qty) + parseInt(food.qty),
            finalPrice: action.payload.finalPrice + food.finalPrice,
          };
        }
        return arr;
      });
      return arr;
    case "DROP":
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
