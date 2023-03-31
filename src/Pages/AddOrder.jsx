import React from "react";

import Aside from "../Components/Aside";
import Header from "../Components/Header";
export default function AddOrder() {
  const addOrder = () => {
    console.log("Order Added");
  };
  return (
    <>
      <Header />

      <div className="row mx-0">
        <Aside />
        <main className="bg-light col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h1 className="">Add Order</h1>
          <hr />

          <form className="row g-3 needs-validation  my-3">
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-12">
                    <label
                      htmlFor="productCategory"
                      className="form-label fs-5 fs-5"
                    >
                      Choose Product Category
                    </label>
                    <select
                      className="form-select"
                      id="orderCategory"
                      required
                    >
                      <option disabled value="DEFAULT">
                        Order Category
                      </option>
                      <option value="order_cleaning_supply">Cleaning Supply</option>
                      <option value="order_home_and_kitchen">Home & Kitchen</option>
                      <option value="order_fruit_vegetables">
                        Fruit & Vegetables
                      </option>
                      <option value="order_dairy">Dairy</option>
                      <option value="order_drinks">Drinks</option>
                      <option value="order_snacks">Snacks</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="orderName" className="form-label fs-5">
                      Order Item
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="orderItem"
                      name="orderItem"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="orderQuantity" className="form-label fs-5">
                      Order Quantity
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="orderQuantity"
                      name="orderQuantity"
                      required
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="orderDate" className="form-label fs-5">
                      Order Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="orderDate"
                      name="orderDate"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={addOrder}
              >
                Add order
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
