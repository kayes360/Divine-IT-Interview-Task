import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Aside from "../Components/Aside";
import Header from "../Components/Header";

export default function AddAdmin() {
  const addAdmin = (e) => {
    console.log("Admin Added");
  };
  return (
    <>
      <Header />

      <div className="row  mx-0">
        <Aside />
        <main className="bg-light col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h1 className="">Add Admin</h1>
          <hr />

          <div className="row">
            <div className="col">
              <form className="row g-3 needs-validation  my-3">
                <div className="col-12">
                  <label htmlFor="adminType" className="form-label fs-5 fs-5">
                    Choose Admin Type
                  </label>
                  <select
                    className="form-select"
                    id="adminType"
                    defaultValue={"DEFAULT"}
                    required
                  >
                    <option disabled value="DEFAULT">
                      Admin Type
                    </option>
                    <option value="user_admin">User Admin</option>
                    <option value="customer_admin">Customer Admin</option>
                    <option value="inventoty_admin">Inventory Admin</option>
                  </select>
                </div>
                <div className="col-6">
                  <label htmlFor="fName" className="form-label fs-5">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fName"
                    name="fName"
                    required
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="lName" className="form-label fs-5">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lName"
                    name="lName"
                    required
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="userName" className="form-label fs-5">
                    Admin User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    name="userName"
                    required
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="adminAddress" className="form-label fs-5">
                    Admin Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="adminAddress"
                    name="adminAddress"
                    required
                  />
                </div>
                <div className="col-12">
                  <label
                    htmlFor="validationCustomUsername"
                    className="form-label fs-5"
                  >
                    Admin Email
                  </label>
                  <div className="input-group">
                    <span className="input-group-text" id="inputGroupPrepend">
                      <FontAwesomeIcon className="" icon={faEnvelope} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="adminEmail"
                      name="adminEmail"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label
                    htmlFor="validationCustomUsername"
                    className="form-label fs-5"
                  >
                    Admin Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text" id="inputGroupPrepend">
                      <FontAwesomeIcon className="" icon={faLock} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="adminPassword"
                      name="adminPassword"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label
                    htmlFor="validationCustomUsername"
                    className="form-label fs-5"
                  >
                    Repeat Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text" id="inputGroupPrepend">
                      <FontAwesomeIcon className="" icon={faLock} />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="adminRepeatPassword"
                      name="adminRepeatPassword"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="adminType" className="form-label fs-5">
                    Choose Security Question
                  </label>
                  <select className="form-select" id="adminType" required>
                    <option value="DEFAULT" disabled>
                      Choose Question
                    </option>
                    <option  value="favourite_color">Your Favourite Color?</option>
                    <option  value="birthplace_name">Your Birthplace Name?</option>
                    <option  value="first_school">Your First School?</option>
                    <option  value="best_friend_name">Your Best Friend Name</option>
                  </select>
                </div>

                <div className="col-12">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={addAdmin}
                  >
                    Add Admin
                  </button>
                </div>
              </form>
            </div>
            <div className="col mt-4">
              <p className="fs-5">Admin Profile Picture</p>
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="adminProfileImg">
                  Upload
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="adminProfileImg"
                  name="adminProfileImg"
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
        </main>
      </div>
    </>
  );
}
