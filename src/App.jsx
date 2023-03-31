import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Header from "./Components/Header";
import Aside from "./Components/Aside";
import Footer from "./Components/Footer";

//Pages
import DashBoard from "./Pages/DashBoard";
import AddAdmin from "./Pages/AddAdmin";
import AdminList from "./Pages/AdminList";
import AddProduct from "./Pages/AddProduct";
import ProductList from "./Pages/ProductList";
import AddOrder from "./Pages/AddOrder";
import OrderList from "./Pages/OrderList";
import StockManage from "./Pages/StockManage";
import Login from "./Pages/Login";

function App() {
  return ( 
        <Router> 
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/" element={<DashBoard />}></Route>
              <Route path="/addadmin" element={<AddAdmin />}></Route>
              <Route path="/adminlist" element={<AdminList />}></Route>
              <Route path="/addproduct" element={<AddProduct />}></Route>
              <Route path="/productlist" element={<ProductList />}></Route>
              <Route path="/addorder" element={<AddOrder />}></Route>
              <Route path="/orderlist" element={<OrderList />}></Route>
              <Route path="/stockmanage" element={<StockManage />}></Route>
            </Routes> 
        </Router>  
  );
}

export default App;
{
  /* 
      <div className="row">

        <Aside /> 
        

      </div> */
}
