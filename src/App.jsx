import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import ProductCart from "./pages/ProductCart";
import Cart from "./pages/Cart";
import Delivery from "./pages/Delivery";
import Stocks from "./pages/Stocks";
import CartDelivery from "./pages/CartDelivery";

function App() {
  return (
    <Router basename="/logos">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route
          path="/productcart"
          element={<ProductCart />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/cartdelivery"
          element={<CartDelivery />}
        />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/stocks" element={<Stocks />} />
      </Routes>
    </Router>
  );
}

export default App;
