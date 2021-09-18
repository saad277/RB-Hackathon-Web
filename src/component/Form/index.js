import React from "react";

const index = () => {
  return (
    <div className="bg-secondary1 py-5 ">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-6">
            <form className="bg-white p-4 rounded">
              <h1 className="text-center text-primary1">Add Records</h1>
              <div class="row  text-white fw-bold">
                <div class="col-12 col-md-6">
                  <div class="mb-4 position-relative">
                    <label>full name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="mb-4 position-relative">
                    <label>company name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Company name"
                    />
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="mb-4 position-relative">
                    <label>email</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="johnsmith@demo.com"
                    />
                  </div>
                </div>
                <div class="col-12 col-md-6">
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
                  <div class="mb-4 position-relative">
                    <label>details about your project</label>
                    <textarea
                      class="form-control"
                      rows="4"
                      placeholder="Description of project"
                    ></textarea>
                  </div>
                </div>
                <div class="col-12 col-md-12">
                  <button
                    type="button"
                    class="btn  text-white fw-bold bg-primary1 btn-lg w-100"
                  >
                    Talk to us
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

export default index;
