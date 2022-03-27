import Sidebar from "./components/sideBar";
import Topbar from "./components/topBar";
import "./App.css";
import Home from "./pages/Home";
import {  Route } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";

function App() {
  return (
      <>
      <Topbar />
      <div className="container">
        <Sidebar />
          <Route exact path="/" element={<Home />}/>
          <Route path="/users" element={<UserList />}/>
          <Route path="/user/:userId" element={ <User />}/>
          <Route path="/newUser" element={<NewUser />}/>
          <Route path="/products" element={<ProductList />}/>
          <Route path="/product/:productId" element={<Product />}/>
          <Route path="/newproduct" element={<NewProduct />}/>
      </div>
      </>
  );
}

export default App;