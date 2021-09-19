import React from "react";
import "./Waitinglist.scss";
const Waitinglist = () => {
  return (
    <div className="Waitinglist py-5 bg-secondary1 ">
      <h1 className="text-center text-white">Waiting Lists</h1>
      <div className="container">
        {/* <div className="row  text-white justify-content-center">
          <div className="col-md-6 col-12 bg-sky rounded py-3">
            <div className="row">
              <div className="d-flex justify-content-between py-1">
                <div className="col-md-4">
                  <h5 className="text-end"> Name</h5>
                </div>
                <div className="col-md-6">
                  <h5>Usama hassan khan</h5>
                </div>
              </div>
              <div className="d-flex justify-content-between py-1">
                <div className="col-md-4">
                  <h5 className="text-end"> Therapy Type</h5>
                </div>
                <div className="col-md-6">
                  <h5>Usama hassan khan</h5>
                </div>
              </div>
              <div className="d-flex justify-content-between py-1">
                <div className="col-md-4">
                  <h5 className="text-end"> Date</h5>
                </div>
                <div className="col-md-6">
                  <h5>Usama hassan khan</h5>
                </div>
              </div>
              <div className="d-flex justify-content-between py-1">
                <div className="col-md-4">
                  <h5 className="text-end"> Doctor Name</h5>
                </div>
                <div className="col-md-6">
                  <h5>Usama hassan khan</h5>
                </div>
              </div>
              <div className="d-flex justify-content-between py-1">
                <div className="col-md-4">
                  <h5 className="text-end"> Status</h5>
                </div>
                <div className="col-md-6">
                  <h5>Usama hassan khan</h5>
                </div>
              </div>
              <div className="d-flex justify-content-between py-1">
                <div className="col-md-4">
                  <h5 className="text-end">Children</h5>
                </div>
                <div className="col-md-6">
                  <h5>Usama hassan khan</h5>
                </div>
              </div>
              <div className="d-flex justify-content-between py-1">
                <div className="col-md-4">
                  <h5 className="text-end"> Fee</h5>
                </div>
                <div className="col-md-6">
                  <h5>Usama hassan khan</h5>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <table className="table table-success table-striped  ">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Therapy Type</th>
              <th scope="col">Doctor Name</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Children</th>
              <th scope="col">Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Waitinglist;
