import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Aside from "../Components/Aside";
import Header from "../Components/Header";

export default function ProductList() {
  const  productEdit =()=>{
    console.log("Product Edited");
  }
  const  productDelete =()=>{
    console.log("Product Deleted");
  }
  const productListColumns = [
    {
      name: "Id",
      selector: (row) => row.productId,
      sortable: true,
      width: "80px",
    },
    {
      name: "Product Category",
      selector: (row) => row.productCategory,
      sortable: true,
      width: "auto",
    },
    {
      name: "Product SKU",
      selector: (row) => row.productSKU,
      sortable: true,
      width: "auto",
    },
    {
      name: "Product Name",
      selector: (row) => row.productName,
      sortable: true,
      width: "auto",
    },

    {
      name: "Product Weight",
      selector: (row) => row.productWeight,
      sortable: true,
      width: "auto",
    },
    {
      name: "Stock Quantity",
      selector: (row) => row.stockQuantity,
      sortable: true,
      width: "auto",
    },
    {
      name: "Alert Quantity",
      selector: (row) => row.alertQuantity,
      sortable: true,
      width: "auto",
    },
    {
      name: "Product Buying Price",
      selector: (row) => row.productBuyingPrice,
      sortable: true,
      width: "auto",
    },
    {
      name: "Product Selling  Price",
      selector: (row) => row.productSellingPrice,
      sortable: true,
      width: "80px",
    },

     
    {
      name: "Action ",
      cell: (row) => (
        <>
          <button className="btn btn-sm btn-primary mx-1" onClick={productEdit}>Edit</button>{" "}
          <button className="btn btn-sm btn-danger" onClick={productDelete}>Delete</button>{" "}
        </>
      ), 
    },
  ];

  const productListData = [
    {
      productId: 1,
      productCategory: "Cleaning Supply",
      productSKU: "0112",
      productName: "Surf Excel",
      productWeight: "20g",
      stockQuantity: "500pcs",
      alertQuantity: "100pcs",
      productBuyingPrice: "20tk",
      productSellingPrice: "22tk", 
    },
    {
      productId: 2,
      productCategory: "Home & Kitchen",
      productSKU: "0113",
      productName: "Fresh Paper Napkins ",
      productWeight: "20g",
      stockQuantity: "500pcs",
      alertQuantity: "100pcs",
      productBuyingPrice: "68tk",
      productSellingPrice: "70tk", 
    },
    {
      productId: 3,
      productCategory: "Fruit & Vegetables",
      productSKU: "0114",
      productName: "Watermelon  ",
      productWeight: "1.5kg+",
      stockQuantity: "200pcs",
      alertQuantity: "50pcs",
      productBuyingPrice: "250",
      productSellingPrice: "260", 
    },
    {
      productId: 4,
      productCategory: "Dairy",
      productSKU: "0115",
      productName: "Pran Milk  ",
      productWeight: "1L",
      stockQuantity: "200pcs",
      alertQuantity: "50pcs",
      productBuyingPrice: "95tk",
      productSellingPrice: "100tk", 
    },
    {
      productId: 5,
      productCategory: "Drinks",
      productSKU: "0116",
      productName: "Sezan Mango Juice  ",
      productWeight: "250ml",
      stockQuantity: "200pcs",
      alertQuantity: "50pcs",
      productBuyingPrice: "22tk",
      productSellingPrice: "25tk", 
    },
  ];
  return (
    <>
    <Header />

    <div className="row mx-0">
      <Aside />
    <main className="bg-light col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <h1 className="">Product List</h1>
      <hr />

      <DataTable
        columns={productListColumns}
        data={productListData}
        pagination
        fixedHeader
        striped
        highlightOnHover
        pointerOnHover
        responsive
        subHeader
        subHeaderComponent={
          <input
            category="text"
            placeholder="Search Product"
            className="form-control w-25"
          />
        }
      />
    </main>
    </div>
    </>
  );
}
