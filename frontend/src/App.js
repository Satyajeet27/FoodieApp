import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./screen/Home";
import { Login } from "./screen/Login";
import { Signup } from "./screen/Signup";
import { CartProvider } from "./components/ContextReducer";
import { MyOrder } from "./screen/MyOrder";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div style={{ marginBottom: "3.5rem" }}>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createuser" element={<Signup />} />
          <Route path="/myorder" element={<MyOrder />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
