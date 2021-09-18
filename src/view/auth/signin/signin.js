import React from "react";

const signin = () => {
  return (
    <div className=" py-5 bg-sky ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-5 col-md-5">
            <form className="bg-primary shadow p-3 rounded">
              <h1 className="text-center text-white">Sign In</h1>
              <div class="row  text-white fw-bold">
                <div class="col-12 col-md-12">
                  <div class="mb-4 position-relative">
                    <label>full name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div class="col-12 col-md-12">
                  <div class="mb-4 position-relative">
                    <label>company name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Company name"
                    />
                  </div>
                </div>
                <div class="col-12 col-md-12">
                  <div class="mb-4 position-relative">
                    <label>email</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="johnsmith@demo.com"
                    />
                  </div>
                </div>
                <div class="col-12 col-md-12">
                  <div class="mb-4 position-relative">
                    <label>phone number</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="0000-0000-000"
                    />
                  </div>
                </div>

                <div class="col-12 col-md-12">
                  <button
                    type="button"
                    class="btn btn-primary text-primary bg-white fw-bold btn-lg w-100"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signin;
