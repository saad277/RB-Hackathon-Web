import axios from "axios";
import React, { useState } from "react";
import { apiUrl } from "../../config";
import { useSelector } from "react-redux";
const MakeAppointment = () => {
  const profile = useSelector((state) => state.profile);
  const token = useSelector((state) => state.token);
  const [therapist, setTherapist] = useState("");
  const [date, setDate] = useState("");
  const [therapyType, setTherapyType] = useState();
  const [remarks, setRemarks] = useState("");
  console.log(token, "token");
  return (
    <div className="bg-secondary1 py-5 ">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-12 col-md-6">
            <form className="bg-white p-4 rounded">
              <h1 className="text-center text-primary1">Add Appointment</h1>
              <div class="row  text-white fw-bold">
                <div class="col-12 col-md-6">
                  <div class="mb-4 position-relative">
                    <label>Therapist Name</label>
                    <input
                      type="text"
                      class="form-control"
                      value={therapist}
                      onChange={(val) => {
                        setTherapist(val.target.value);
                      }}
                      placeholder="Therapist Name"
                    />
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="mb-4 position-relative">
                    <label>Date of appointment</label>
                    <input
                      type="date"
                      class="form-control"
                      value={date}
                      onChange={(val) => {
                        setDate(val.target.value);
                      }}
                      placeholder={Date(Date.now()).toString()}
                    />
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="mb-4 position-relative">
                    <label>Therapy type</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Therapy type"
                      required
                      value={therapyType}
                      onChange={(val) => {
                        setTherapyType(val.target.value);
                      }}
                    />
                  </div>
                </div>
                <div class="col-12 col-md-12">
                  <div class="mb-4 position-relative">
                    <label>Remarks</label>
                    <textarea
                      class="form-control"
                      rows="4"
                      placeholder="Remarks (Optional)"
                      value={remarks}
                      onChange={(val) => {
                        setRemarks(val.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
                <div class="col-12 col-md-12">
                  <button
                    type="button"
                    class="btn  text-white fw-bold bg-primary1 btn-lg w-100"
                    onClick={() => {
                      console.log(
                        "date",
                        date,
                        "therapist",
                        therapist,
                        "therapyType",
                        therapyType,
                        "token",
                        token
                      );
                      axios({
                        url: `${apiUrl}appointments/${profile}`,
                        method: "post",
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                        data: {
                          appointmentDate: date,
                          therapist: therapist,
                          therapyType: therapyType,
                        },
                      })
                        .then((res) => {
                          console.log("added appointment", res);
                        })
                        .catch((err) => {
                          console.log(
                            "error occured with code: ",
                            err.response.status
                          );
                        });
                    }}
                  >
                    Submit
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

export default MakeAppointment;
