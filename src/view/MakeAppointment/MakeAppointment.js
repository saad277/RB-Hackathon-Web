import React, { useState } from "react";

const MakeAppointment = () => {
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const [therapyType, setTherapyType] = useState("");
  const [remarks, setRemarks] = useState("");
  console.log(patientName, date, therapyType, remarks);
  return (
    <div className="bg-secondary1 py-5 ">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-6">
            <form className="bg-white p-4 rounded">
              <h1 className="text-center text-primary1">Add Appointment</h1>
              <div class="row  text-white fw-bold">
                <div class="col-12 col-md-6">
                  <div class="mb-4 position-relative">
                    <label>Name of patient</label>
                    <input
                      type="text"
                      class="form-control"
                      value={patientName}
                      onChange={(val) => {
                        setPatientName(val.target.value);
                      }}
                      placeholder="Patient Name"
                    />
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="mb-4 position-relative">
                    <label>Date of appointment</label>
                    <input
                      type="text"
                      class="form-control"
                      value={date}
                      onChange={(val) => {
                        setDate(val.target.value);
                      }}
                      placeholder="Appointment date"
                    />
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="mb-4 position-relative">
                    <label>Therapy type</label>
                    <input
                      type="text"
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
                      placeholder="Remarks"
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
