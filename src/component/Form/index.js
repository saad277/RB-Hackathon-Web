import React from "react";

const index = () => {
  return (
    <div className="bg-sky py-5 ">
      <h1 className="text-center text-white">Add Records</h1>
      <div className="container">
        <form>
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
              <button type="button" class="btn btn-primary btn-lg w-100">
                Talk to us
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
