import React from "react";
import "./index.scss";
const Finddoctor = () => {
  return (
    <div className=" ">
      <div class="container">
        <div class="row height d-flex justify-content-center align-items-center vh-100">
          <div class="col-12 col-md-8 pb-5 mb-5">
            <div class="search mb-5">
              <i class="fa fa-search"></i>{" "}
              <input
                type="text"
                class="form-control"
                placeholder="search doctor ? "
              />{" "}
              <button class="btn btn-primary">Search</button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finddoctor;
