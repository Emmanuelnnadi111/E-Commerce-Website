import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Signup from "./components/pages/signup/Signup";
import Login from "./components/pages/login/Login";
import Wishlist from "./components/wishlist/Wishlist";
import ProductDetails from "./components/productDetails/ProductDetails";
import AccountDropDown from "./components/accountDropdown/AccountDropDown";
import Cart from "./components/Cart/Cart";
import Contact from "./components/pages/contact/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/notfound/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/Signup" Component={Signup} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="*" Component={NotFound} />
        <Route exact path="/wishlist" Component={Wishlist} />
        <Route exact path="/productDetails" Component={ProductDetails} />
        <Route exact path="/AccountDropDown" Component={AccountDropDown} />
        <Route exact path="/Cart" Component={Cart} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
