import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import {  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aside from "../Components/Aside";
import Header from "../Components/Header";

export default function AdminList() {
  const  adminEdit =()=>{
    console.log("Admin Edited");
  }
  const  adminDelete =()=>{
    console.log("Admin Deleted");
  }
  const adminListColumns = [
    {
      name: "Id",
      selector: (row) => row.adminId, 
      sortable: true,
    },
    {
      name: "Admin Full Name",
      selector: (row) => row.adminName,
      sortable: true,
    },
    {
      name: "Admin User Name",
      selector: (row) => row.adminUserName,
      sortable: true,
    },
    {
      name: "Admin Type",
      selector: (row) => row.adminType,
      sortable: true,
    },
    {
      name: "Admin Email",
      selector: (row) => row.adminEmail,
      sortable: true,
    },
    {
      name: "Sequrity Question",
      selector: (row) => row.securityQuestion,
      sortable: true,
    },
    {
      name: "Admin Profile ",
      cell: (row) => (
        <>
          <button className="btn btn-sm btn-primary mx-1" onClick={adminEdit}>Edit</button>{" "}
          <button className="btn btn-sm btn-danger" onClick={adminDelete}>Delete</button>{" "}
        </>
      ),
    },
  ];
 

  const adminListData = [
    {
      adminId: 1,
      adminName: "Jamal Uddin",
      adminUserName: "Jamal04",
      adminType: "User Admin",
      adminEmail: "jamal04@gmail.com",
      securityQuestion: "Your Favourite Color?",
      imgsrc: "https://unsplash.com/photos/YE6zWSONJ3Q", 
    },
    {
      adminId: 2,
      adminName: "Nizam Ahmed",
      adminUserName: "Nizam02",
      adminType: "Customer Admin",
      adminEmail: "niz02@gmail.com",
      securityQuestion: "Your Birthplace Name?",
      imgsrc: "https://unsplash.com/photos/YE6zWSONJ3Q",
    },
    {
      adminId: 3,
      adminName: "Rokonuzzaman",
      adminUserName: "Rokonuzzaman04",
      adminType: "Customer Admin",
      adminEmail: "jamal04@gmail.com",
      securityQuestion: "Your First School Name?",
      imgsrc: "https://unsplash.com/photos/YE6zWSONJ3Q",
    },
    {
      adminId: 4,
      adminName: "Mushfiqur",
      adminUserName: "Mushfiqur125",
      adminType: "Inventory Admin",
      adminEmail: "mushfiqur125@gmail.com",
      securityQuestion: "Your Best Friend Name?",
      imgsrc: "https://unsplash.com/photos/YE6zWSONJ3Q",
    },
    {
      adminId: 5,
      adminName: "Md. Mehedi Hasan",
      adminUserName: "Mehedi56",
      adminType: "Inventory Admin",
      adminEmail: "mehedi56@gmail.com",
      securityQuestion: "Your Best Friend Name?",
      imgsrc: "https://unsplash.com/photos/YE6zWSONJ3Q",
    },
    {
      adminId: 6,
      adminName: "Sazzad Hossain",
      adminUserName: "Sazzad532",
      adminType: "Inventory Admin",
      adminEmail: "sazzad532@gmail.com",
      securityQuestion: "Your Favourite Color?",
      imgsrc: "https://unsplash.com/photos/YE6zWSONJ3Q",
    },
    
  ];
   

  return (
    <>
    <Header /> 

    <div className="row  mx-0">
    <Aside /> 
      
    <main className="bg-light col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <h1 className="">Admin List</h1>
      <hr />

      <DataTable
        columns={adminListColumns}
        data={adminListData}
        pagination
        fixedHeader
        striped
        highlightOnHover
        pointerOnHover
        responsive
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search Admin"
            className="form-control w-25"
             
          />
        }
      />
    </main> 
    </div>
    </>
  );
}
