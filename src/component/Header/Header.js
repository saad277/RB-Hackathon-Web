import React from "react";
import "./Header.scss";
import im from "./../../../src/assets/images/logo.png";
import { useHistory } from "react-router-dom";
const Header = () => {
  const history = useHistory();
  const redirectlogin = () => {
    let path = `signin`;
    history.push(path);
  };
  const redirecthome = () => {
    let path = `/`;
    history.push(path);
  };
  const redirectregister = () => {
    let path = `/register`;
    history.push(path);
  };
  const redirectrecord = () => {
    let path = `/record`;
    history.push(path);
  };

  const rediretschedule = () => {
    let path = `/schedule`;
    history.push(path);
  };
  const rediretdetail = () => {
    let path = `/userdetail`;
    history.push(path);
  };
  const finddoctor = () => {
    let path = `/finddoctor`;
    history.push(path);
  };
  return (
    <div
      class="header-wrapper  d-lg-block bg-primary1 text-white "
      id="headerScroll   "
    >
      <div class="primary_header px-2">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-6 col-md-2">
              <div className="logo" onClick={redirecthome}>
                {" "}
                <img src={im} alt="logo" />
              </div>
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

            <div class="col-12 col-md-7 ">
              <div
                class="d-md-flex align-items-center text-white   collapse navbar-collapse  "
                id="navbarSupportedContent"
              >
                <ul class="nav main-nav nav-list ms-auto justify-content-lg-end flex-md-row flex-column py-2 py-md-0  text-white">
                  <li
                    className="py-2 py-md-0 text-center "
                    onClick={rediretdetail}
                  >
                    <a href="">User Detail</a>
                  </li>
                  <li
                    className="py-2 py-md-0 text-center  "
                    onClick={rediretschedule}
                  >
                    <a href="">Shedule</a>
                  </li>
                  <li
                    className="py-2 py-md-0 text-center  "
                    onClick={redirectrecord}
                  >
                    <a a href="">
                      Add Records
                    </a>
                  </li>
                  <li
                    className="py-2 py-md-0 text-center "
                    onClick={finddoctor}
                  >
                    <a href="">Find A Doctor</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-12 ">
              <div class="d-flex hero-actions text-nowrap ms-3 justify-content-md-end mt-2 mt-xl-0 text-center justify-content-center">
                <ul className="d-flex justify-content-center align-items-center sign">
                  <li onClick={redirectlogin}>
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
                    <a href="">Sign In</a>
                  </li>
                  <li onClick={redirectregister}>
                    <a href="">Register</a>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
