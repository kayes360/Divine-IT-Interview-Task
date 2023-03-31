import {
  faHouse,
  faChalkboard,
  faUserAltSlash,
  faUsersBetweenLines,
  faCartShopping,
  faFile,
  faChartSimple,
  faPlus,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Collapse from "react-bootstrap/Collapse";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Aside() {
  const [openAdmin, setOpenAdmin] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-white sidebar collapse mt-2"
    >
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column  ">
          <li className="nav-item my-1   mx-2">
            <Link
              to="/"
              className="nav-link rounded  link-dark active border-bottom"
              aria-current="page"
            >
              <FontAwesomeIcon className="mx-3" icon={faChalkboard} />
              Dashboard
            </Link>
          </li>

          <li className="nav-item my-1   mx-2">
            <a
              className="nav-link rounded link-dark active border-bottom"
              aria-current="page"
              role="button"
              onClick={() => setOpenAdmin(!openAdmin)}
              aria-controls="example-collapse-text"
              aria-expanded={openAdmin}
            >
              <FontAwesomeIcon className="mx-3" icon={faUsersBetweenLines} />
              Admin Details
            </a>
            <Collapse in={openAdmin}>
              <div id="example-collapse-text">
                <ul className="nav  flex-column ">
                  <li className="nav-item">
                    <Link to="/addadmin" className="nav-link ps-5 rounded">
                      <FontAwesomeIcon className="mx-3" icon={faPlus} />
                      Add Admin
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/adminlist" className="nav-link ps-5 rounded">
                      <FontAwesomeIcon className="mx-3" icon={faList} />
                      Admin List
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className="nav-item my-1   mx-2">
            <a
              className="nav-link rounded link-dark active border-bottom"
              aria-current="page"
              role="button"
              onClick={() => setOpenProducts(!openProducts)}
              aria-controls="example-collapse-text"
              aria-expanded={openProducts}
            >
              <FontAwesomeIcon className="mx-3" icon={faCartShopping} />
              Products
            </a>
            <Collapse in={openProducts}>
              <div id="example-collapse-text">
                <ul className="nav  flex-column">
                  <li className="nav-item">
                    <Link to="/addproduct" className="nav-link ps-5 rounded">
                      <FontAwesomeIcon className="mx-3" icon={faPlus} />
                      Add Product
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/productlist" className="nav-link ps-5 rounded">
                      <FontAwesomeIcon className="mx-3" icon={faList} />
                      Product List
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className="nav-item my-1   mx-2">
            <a
              className="nav-link rounded link-dark active border-bottom"
              aria-current="page"
              role="button"
              onClick={() => setOpenOrder(!openOrder)}
              aria-controls="example-collapse-text"
              aria-expanded={openOrder}
            >
              <FontAwesomeIcon className="mx-3" icon={faFile} />
              Order
            </a>
            <Collapse in={openOrder}>
              <div id="example-collapse-text">
                <ul className="nav  flex-column">
                  <li className="nav-item">
                    <Link to="/addorder" className="nav-link ps-5 rounded">
                      <FontAwesomeIcon className="mx-3" icon={faPlus} />
                      Add Order
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/orderlist" className="nav-link ps-5 rounded">
                      <FontAwesomeIcon className="mx-3" icon={faList} />
                      Order List
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className="nav-item my-1   mx-2">
            <Link
              to="/stockmanage"
              className="nav-link rounded link-dark active border-bottom"
              aria-current="page"
              role="button"
            >
              <FontAwesomeIcon className="mx-3" icon={faChartSimple} />
              Stock Manage
            </Link>
          </li>

          {/* <FontAwesomeIcon className="mx-3" icon={faHouse} /> */}
        </ul>
      </div>
    </nav>
  );
}
