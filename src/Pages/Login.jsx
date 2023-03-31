import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../Assets/style.css";
import loginBG from "../Assets/loginBG.png";
import LogoImg from "../Assets/logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  const login=()=>{
    console.log("Admin Logged In")
  }
  return (
    <>
      <div className="container-fluid px-0 ">
        <div className="vh-100 d-flex align-items-center justify-content-center">
          <div className="loginWrapper  border rounded   ">
            <div className="row  h-100 d-flex align-items-center justify-content-between">
              <div className="col-4 ms-4  my-auto bg-white">
                <form className="mx-auto shadow rounded p-4  ">
                  <div className="mb-3">
                    <label htmlFor="adminLoginID" className="form-label">
                      Admin ID
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="adminLoginID"
                      placeholder="Enter Your Admin Id"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="adminPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="adminPassword"
                      placeholder="Enter Your Admin Password"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <a
                      href="#"
                      className="form-check-label"
                      htmlFor="forGotPassword"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="mx-auto text-center">
                    <Link to="/">
                      <button type="submit" className="btn btn-primary w-100" onClick={login}>
                        Submit
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
              <div className="col-7 bg-g-violet rounded-end   h-100 d-flex flex-column align-items-center justify-content-center text-white text-center">
                <img src={loginBG} className="img-fluid w-75" alt="" />
                <h3>Welcome to Divine IT Inventory System</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
