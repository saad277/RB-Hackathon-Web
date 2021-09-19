import React from "react";
import "./index.scss";
const Finddoctor = () => {
  return (
    <div className="py-3">
      <div class="container">
        <div class="row height d-flex justify-content-center align-items-center">
          <div class="col-12 col-md-8">
            <div class="search">
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
