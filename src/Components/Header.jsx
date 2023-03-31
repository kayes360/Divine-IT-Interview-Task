import React from "react";
import LogoImg from "../Assets/logo.png"; 
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Header() {
  const signOut = () => {
    console.log("Sign Out Success");
  };
  return (
    <header className=" row   sticky-top bg-primary   mx-0 px-0  ">
      <div className="  shadow bg-white col-md-3 col-lg-2  ">
        <a className=" " href="#">
          <img src={LogoImg} className="img-fluid" alt="" />
        </a>
      </div>

      <div className="col-md-9 col-lg-10  ">
        <div className="float-end  my-2"> 
          <Link to="/login" className="">
            <button className="btn btn-info" type="submit" onClick={signOut}>
              Sign Out
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
