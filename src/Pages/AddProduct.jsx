import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Aside from "../Components/Aside";
import Header from "../Components/Header";

export default function AddProduct() {
  const addProduct = (e) => {
    console.log("Product Added");
  };
  return (
    <>
    <Header />

    <div className="row mx-0">
      <Aside />
    <main className="bg-light col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <h1 className="h2">Add Product</h1>
      <hr />

      <form className="row g-3 needs-validation  my-3">
        <div className="row">
          <div className="col">
           <div className="row">
           <div className="col-12">
              <label htmlFor="productCategory" className="form-label fs-5 fs-5">
                Choose Product Category
              </label>
              <select className="form-select" id="productCategory" required>
                <option  disabled value="DEFAULT">
                  Product Category
                </option>
                <option value="cleaning_supply">Cleaning Supply</option>
                <option value="home_and_kitchen">Home & Kitchen</option>
                <option value="fruit_vegetables">Fruit & Vegetables</option>
                <option value="dairy">Dairy</option>
                <option value="drinks">Drinks</option>
                <option value="snacks">Snacks</option>
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="productSKU" className="form-label fs-5">
                Product SKU
              </label>
              <input
                type="text"
                className="form-control"
                id="productSKU"
                name="productSKU"
                placeholder="SKU Code"
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="productName" className="form-label fs-5">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                name="productName" 
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="productWeight" className="form-label fs-5">
                Product Weight
              </label>
              <input
                type="text"
                className="form-control"
                id="productWeight"
                name="productWeight"
                required
              />
            </div>
            <div className="col-6">
              <label htmlFor="stockQuantity" className="form-label fs-5">
                Stock Quantity
              </label>
              <input
                type="number"
                className="form-control"
                id="stockQuantity"
                name="stockQuantity"
                required
              />
            </div>
            <div className="col-6">
              <label htmlFor="alertQuantity" className="form-label fs-5">
                Alert Quantity
              </label>
              <input
                type="number"
                className="form-control"
                id="alertQuantity"
                name="alertQuantity"
                required
              />
            </div>
            <div className="col-6">
              <label htmlFor="buyPrice" className="form-label fs-5">
                Product Buying Price
              </label>
              <input
                type="number"
                className="form-control"
                id="buyPrice"
                name="buyPrice"
                required
              />
            </div>
            <div className="col-6">
              <label htmlFor="sellPrice" className="form-label fs-5">
                Product Selling Price
              </label>
              <input
                type="number"
                className="form-control"
                id="sellPrice"
                name="sellPrice"
                required
              />
            </div>
            
           </div>
          </div>
          <div className="col ">
            <p className="fs-5">Add Product Picture</p>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="productPicture">
                Upload
              </label>
              <input
                type="file"
                className="form-control"
                id="productPicture"
                name="productPicture"
              />
            </div>
            <div className="text-center">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                className="rounded"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit" onClick={addProduct}>
            Add Product
          </button>
        </div>
      </form>
    </main>
    </div>
    </>
  );
}
