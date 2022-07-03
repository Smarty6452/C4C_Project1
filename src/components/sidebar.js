import React from "react";
import { Link } from "react-router-dom";

import Logo from "../components/logo";
import { MdSpeed } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { RiNodeTree } from "react-icons/ri";

const sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <Logo className="sidebar-logo" />

        <div className="d-flex min-vh-100">
          <div
            id="sidebar"
            className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block"
          />
          <div id="sidebar-wrapper" className="min-vh-100">
            <ul className="list-unstyled components">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  <MdSpeed className="sidebar-icon" /> Dashboard
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="#" className="nav-link">
                  <AiOutlineUser className="sidebar-icon" /> Employees{" "}
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="#" className="nav-link">
                  <RiNodeTree className="sidebar-icon" /> Attendance
                </Link>
              </li>
            </ul>
            <ul id="collapse-sidebar-btn">
              <li><a href="#">collapse sidebar</a></li>
            </ul>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default sidebar;
