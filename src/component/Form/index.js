import React, { useEffect, useState } from "react";

const Index = () => {
  const [fName, setFName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  useEffect(() => {
    navigator.geolocation.watchPosition((position) => {
      if (!location) {
        setLocation(`${position.coords.longitude},${position.coords.latitude}`);
      }
    });
  }, []);
  console.log("location", location);
  return (
    <div className="bg-secondary1 py-5 ">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-md-6 col-12">
            <form className="bg-white p-4 rounded">
              <h1 className="text-center text-primary1">Add Records</h1>
              <div class="row  text-white fw-bold">
                <div class="col-12 col-md-6">
                  <div class="mb-4 position-relative">
                    <label>full name</label>
                    <input
                      type="text"
                      class="form-control"
                      value={fName}
                      onChange={(val) => {
                        setFName(val.target.value);
                      }}
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
                      value={companyName}
                      onChange={(val) => {
                        setCompanyName(val.target.value);
                      }}
                      placeholder="Company name"
                    />
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="mb-4 position-relative">
                    <label>email</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="johnsmith@demo.com"
                      required
                      value={email}
                      onChange={(val) => {
                        setEmail(val.target.value);
                      }}
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
                      value={number}
                      onChange={(val) => {
                        setNumber(val.target.value);
                      }}
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
                      value={description}
                      onChange={(val) => {
                        setDescription(val.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
                <div class="col-12 col-md-12">
                  <button
                    type="button"
                    class="btn  text-white fw-bold bg-primary1 btn-lg w-100"
                  >
                    Add record
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

export default Index;
