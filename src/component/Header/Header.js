import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeuser } from "../../actions/actions";
import "./Header.scss";
import im from "./../../../src/assets/images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  console.log("profile", profile);
  return (
    <div
      class="header-wrapper  d-lg-block bg-primary1 text-white "
      id="headerScroll   "
    >
      <div class="primary_header px-2">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-6 col-md-2">
              <Link to="/">
                <div className="logo">
                  <img src={im} alt="logo" />
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-1 text-end d-md-none">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </span>
              </button>
            </div>
            {profile == "true" ? (
              <div class="col-12 col-md-7 ">
                <div
                  class="d-md-flex align-items-center text-white   collapse navbar-collapse  "
                  id="navbarSupportedContent"
                >
                  <ul class="nav main-nav nav-list ms-auto justify-content-lg-end flex-md-row flex-column py-2 py-md-0  text-white">
                    <li className="py-2 py-md-0 text-center ">
                      <Link to="/userdetail">User Detail</Link>
                    </li>
                    <li className="py-2 py-md-0 text-center  ">
                      <Link to="/schedule">Schedule</Link>
                    </li>
                    <li className="py-2 py-md-0 text-center  ">
                      <Link to="/record">Add records</Link>
                    </li>
                    <li className="py-2 py-md-0 text-center ">
                      <Link to="/finddoctor">Find a doctor</Link>
                    </li>
                    <li className="py-2 py-md-0 text-center ">
                      <Link to="/appointment">Make appointment</Link>
                    </li>
                    <li
                      onClick={() => dispatch(removeuser())}
                      className="py-2 py-md-0 text-center "
                    >
                      <Link to="/">Sign out</Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}

            {profile != "true" ? (
              <div className="col-md-3 col-12 ">
                <div class="d-flex hero-actions text-nowrap ms-3 justify-content-md-end mt-2 mt-xl-0 text-center justify-content-center">
                  <ul className="d-flex justify-content-center align-items-center sign">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                      <Link to="/signin">Sign In</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </ul>

                  {/* <a
                  href="/free-consultancy/get-free-consultancy"
                  class="btn btn-job  btn-primary btn-primary-animation ms-3"
                >
                  Post Your Job
                </a> */}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
