import React from "react";

import Aside from "../Components/Aside";
import Header from "../Components/Header";
export default function StockManage() {
  const addStock =()=>{
    console.log("Product Stock Added");
  }
  const deductStock =()=>{
    console.log("Product Stock Deducted");

  }
  return (
    <>
    <Header />

    <div className="row mx-0">
      <Aside />
    <main className="bg-light col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <h1 className="">StockManage </h1>
      <hr />

      <form className="row g-3 needs-validation  my-3">
        <div className="row">
          <div className="col">
           <div className="row">
           <div className="col-12">
                    <label
                      htmlFor="stockProductCategory"
                      className="form-label fs-5 fs-5"
                    >
                      Choose Product Category
                    </label>
                    <select
                      className="form-select"
                      id="stockProductCategory"
                      required
                    >
                      <option disabled value="DEFAULT">
                        Order Category
                      </option>
                      <option value="stock_cleaning_supply">Cleaning Supply</option>
                      <option value="stock_home_and_kitchen">Home & Kitchen</option>
                      <option value="stock_fruit_vegetables">
                        Fruit & Vegetables
                      </option>
                      <option value="stock_dairy">Dairy</option>
                      <option value="stock_drinks">Drinks</option>
                      <option value="stock_snacks">Snacks</option>
                    </select>
                  </div>
            <div className="col-12">
              <label htmlFor="stockProductSKU" className="form-label fs-5">
                Product SKU
              </label>
              <input
                type="text"
                className="form-control"
                id="stockProductSKU"
                name="stockProductSKU"
                placeholder="SKU Code"
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="stockQuantity" className="form-label fs-5">
                Product Quantity
              </label>
              <input
                type="text"
                className="form-control"
                id="stockQuantity"
                name="stockQuantity"
                placeholder="SKU Code"
                required
              />
            </div>
             
              
           </div>
          </div>
           
        </div>
        <div className="col-6">
          <button className="btn btn-primary" type="submit" onClick={addStock}>
            Add Stock
          </button>
        </div>
        <div className="col-6">
          
          <button className="btn btn-info" type="submit" onClick={deductStock}>
            Deduct Stock
          </button>
        </div>
      </form>
    </main>
     </div>
     </>
  );
}
