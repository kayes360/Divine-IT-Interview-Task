import React from "react";

import DataTable from "react-data-table-component";
import Aside from "../Components/Aside";
import Header from "../Components/Header";
export default function OrderList() {
  const orderEdit = () => {
    console.log("Order Edited");
  };
  const orderDelete = () => {
    console.log("Order Deleted");
  };
  const orderListColumns = [
    {
      name: "Id",
      selector: (row) => row.orderId,
      sortable: true,
      width: "80px",
    },
    {
      name: "Order Code",
      selector: (row) => row.orderCode,
      sortable: true,
      width: "auto",
    },
    {
      name: "Order Category",
      selector: (row) => row.orderCategory,
      sortable: true,
      width: "auto",
    },
    {
      name: "Order Item",
      selector: (row) => row.orderItem,
      sortable: true,
      width: "auto",
    },

    {
      name: "Order Quantity",
      selector: (row) => row.orderQuantity,
      sortable: true,
      width: "auto",
    },
    {
      name: "Order Date",
      selector: (row) => row.orderDate,
      sortable: true,
      width: "auto",
    },
    {
      name: "Action ",
      cell: (row) => (
        <>
          <button className="btn btn-sm btn-primary mx-1" onClick={orderEdit}>Edit</button>{" "}
          <button className="btn btn-sm btn-danger" onClick={orderDelete}>Delete</button>{" "}
        </>
      ),
    },
  ];

  const orderListData = [
    {
      orderId: 1,
      orderCode: "0112",
      orderCategory: "Cleaning Supply",
      orderItem: "Surf Excel",
      orderQuantity: "500pcs",
      orderDate: "02/03/2023",
    },
    {
      orderId: 2,
      orderCategory: "Home & Kitchen",
      orderCode: "0113",
      orderItem: "Fresh Paper Napkins ",
      orderQuantity: "400pcs",
      orderDate: "02/03/2023",
    },
    {
      orderId: 3,
      orderCategory: "Fruit & Vegetables",
      orderCode: "0114",
      orderItem: "Watermelon  ",
      orderQuantity: "100pcs",
      orderDate: "08/03/2023",
    },
    {
      orderId: 4,
      orderCategory: "Dairy",
      orderCode: "0115",
      orderItem: "Pran Milk  ",
      orderQuantity: "100pcs",
      orderDate: "10/03/2023",
    },
    {
      orderId: 5,
      orderCategory: "Drinks",
      orderCode: "0116",
      orderItem: "Sezan Mango Juice  ",
      orderQuantity: "200pcs",
      orderDate: "20/03/2023",
    },
  ];
  return (
    <>
      <Header />

      <div className="row mx-0">
        <Aside />
        <main className="bg-light col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h1 className="">Order List</h1>
          <hr />

          <DataTable
            columns={orderListColumns}
            data={orderListData}
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
                placeholder="Search Order"
                className="form-control w-25"
              />
            }
          />
        </main>
      </div>
    </>
  );
}
