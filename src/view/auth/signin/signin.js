import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addprofile } from "../../../actions/actions";
import axios from "axios";
import { apiUrl } from "../../../config";
const Signin = () => {
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  return (
    <div className=" py-5 bg-sky ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-5 col-md-5">
            <form className="bg-primary1 shadow p-3 rounded">
              <h1 className="text-center text-white">Sign In</h1>
              <div class="row  text-white fw-bold">
                <div class="col-12 col-md-12">
                  <div class="mb-4 position-relative">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone number"
                      value={number}
                      onChange={(val) => {
                        setNumber(val.target.value);
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
                  <button
                    type="button"
                    class="btn btn-primary text-primary1 bg-white fw-bold btn-lg w-100"
                    onClick={() => {
                      axios({
                        method: "post",
                        url: `${apiUrl}users/login`,
                        data: {
                          phone: number,
                          password: password,
                        },
                      })
                        .then((res) => {
                          console.log("auth done", res);
                          axios({
                            method: "get",
                            url: `${apiUrl}users/me`,
                            headers: {
                              authorization: `Bearer ${res.data.accessToken}`,
                            },
                          })
                            .then((res) => {
                              dispatch(addprofile(res.data.user._id));
                            })
                            .catch((err) => {
                              console.log(
                                "error occured with status code:",
                                err.response.status
                              );
                            });
                        })
                        .catch((err) => {
                          console.log(
                            "error occured with status code:",
                            err.response.status
                          );
                        });
                    }}
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

export default Signin;
