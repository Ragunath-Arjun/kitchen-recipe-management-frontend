import React from "react";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light topbar-position container-fluid">
        <a class="navbar-brand ml-5">
          <img
            className="logo img-fluid ml-5"
            src={require("../src/logo1.PNG")}
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i
              class="fa fa-bars fa-1x"
              aria-hidden="true"
              style={{ color: "rgb(0, 191, 255)" }}
            ></i>
          </span>
        </button>

        <div
          class="collapse header navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mr-auto">
            <li
              class="nav-item active"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <a class="nav-link text-white" href="#topbar">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#search" class="nav-link text-white">
                <i class="fa fa-search" aria-hidden="true"></i> Search Recipe
              </a>
            </li>
            <li class="nav-item">
              <a href="#contact" class="nav-link text-white">
                 Contact Us
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="btn-primary mr-4"
            onClick={() => {
              logout();
            }}
          >
            <i class="fa fa-sign-out" aria-hidden="true"></i> Logout
          </button>
        </div>
      </nav>
    </>
  );
}

export default Topbar;
