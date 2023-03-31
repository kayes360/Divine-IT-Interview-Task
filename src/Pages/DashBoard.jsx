import { 
  faCartShopping, 
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import Card from "react-bootstrap/Card";
import Aside from "../Components/Aside";
import Header from "../Components/Header";

import {
  Chart as CharJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

export default function DashBoard() {
  CharJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

  const productVsQuantityData = {
    labels: ["Surf Excel","Fresh Paper Napkins", "Watermelon", "Pran Milk","Sezan Mango Juice"],
    datasets: [
      {
        data: [236, 400, 70,50,100],
        backgroundColor: "#1988c8",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  const productVsQuantityOptions = { plugins: {
    legend: {
      display: false
    }
  }};

  const salesVsMonthData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November' ,'December'],
    datasets: [
      {
        data: [30000, 66000, 82000,23000, 36000, 28000,43000, 26000, 52000,73000, 26000, 42000],
        backgroundColor: "#187cff",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  const salesVsMonthOptions = { plugins: {
    legend: {
      display: false
    }
  }};

  const productVsDayData = {
    labels: ['Saturday','Sunday' , 'Monday', 'Tuesday', 'Wednesday', 'Thursday',  'Friday'],
    datasets: [
      {
        data: [300, 260, 480,310, 160, 380, 440],
        backgroundColor: "#314a86",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  const productVsDayOptions = { plugins: {
    legend: {
      display: false
    }
  }};

  return ( 
    <>
    <Header /> 

    <div className="row  mx-0">
    <Aside />
    <main className="bg-light col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <h1 className="">Dashboard</h1>
      <hr/>
      <div className="row justify-content-evenly my-5">
        <div className="col-4">
          <Card className="shadow bg-n" style={{ width: "18rem", height: "10rem" }}>
            <Card.Body className="d-flex align-items-center justify-content-around text-white">
              <Card.Title className="">Total Admin: 6</Card.Title>
              <FontAwesomeIcon className="fa-2xl" icon={faUserTie} />

            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card className="shadow bg-navy-blue" style={{ width: "18rem", height: "10rem" }}>
            <Card.Body className="d-flex align-items-center justify-content-around text-white">
              <Card.Title className=""> Total Products :75</Card.Title>
              <FontAwesomeIcon className="fa-2xl" icon={faCartShopping} />

            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row my-5">
        <div className="col">
          <h3>Total Inventory Summary- Product vs Quantity</h3>
          <hr />
          <div className="product-vs-quantity-chart-wrapper">
            <Bar
              data={productVsQuantityData}
              options={productVsQuantityOptions}
            ></Bar>
          </div>
        </div>
      </div>
      <div className="row  my-5">
        <div className="col">
          <h3>Total Sales Summary - Monthly</h3>
          <hr />
          <div className="sales-vs-month-chart-wrapper">
            <Bar data={salesVsMonthData} options={salesVsMonthOptions}></Bar>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <h3>Consumption of Product Per Day</h3>
        <hr />

        <div className="col">
          <hr />
          <div className="product-vs-day-chart-wrapper">
            <Bar data={productVsDayData} options={productVsDayOptions}></Bar>
          </div>
        </div>
      </div>
    </main> 
    </div>
    </>
  );
}
