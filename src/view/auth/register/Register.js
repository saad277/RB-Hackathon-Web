import React, { useState } from "react";
import axios from "axios";
import { apiUrl } from "../../../config";
import { useHistory } from "react-router-dom";
const Register = () => {
  const history = useHistory();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  console.log(fName, lName, password, number);
  return (
    <div className=" py-5 bg-sky ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-5">
            <form className="bg-primary1 shadow p-3 rounded">
              <h1 className="text-center text-white">Register</h1>
              <div class="row  text-white fw-bold">
                <div class="col-12 col-md-12">
                  <div class="mb-4 position-relative">
                    <label>First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                      value={fName}
                      onChange={(val) => {
                        setFName(val.target.value);
                      }}
                    />
                  </div>
                </div>
                <div class="col-12 col-md-12">
                  <div class="mb-4 position-relative">
                    <label>Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                      value={lName}
                      onChange={(val) => {
                        setLName(val.target.value);
                      }}
                    />
                  </div>
                </div>
                <div class="col-12 col-md-12">
                  <div class="mb-4 position-relative">
                    <label>Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(val) => {
                        setPassword(val.target.value);
                      }}
                    />
                  </div>
                </div>
                <div class="col-12 col-md-12">
                  <div class="mb-4 position-relative">
                    <label>Phone Number</label>
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
                  <button
                    type="button"
                    class="btn btn-primary text-primary1 bg-white fw-bold btn-lg w-100"
                    onClick={() => {
                      console.log(`${apiUrl}users`);
                      axios({
                        method: "post",
                        url: `${apiUrl}users`,
                        data: {
                          firstName: fName,
                          lastName: lName,
                          password: password,
                          phone: number,
                        },
                      })
                        .then((res) => {
                          console.log("res", res);
                          history.push("signin");
                        })
                        .catch((err) => {
                          console.log("err", err);
                        });
                    }}
                  >
                    Register
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

export default Register;
