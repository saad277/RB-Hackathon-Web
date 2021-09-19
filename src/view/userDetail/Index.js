import React from "react";
import { useSelector } from "react-redux";
const Index = () => {
  const userprofile = useSelector((state) => state.user);
  // console.log("user data ", userprofile.data.firstName);
  // console.log("user data firstname ", userprofile.firstName);
  // console.log("user data user ", userprofile.user.firstName);
  return (
    <div className="container">
      <div className="py-4 ">
        <div className="row  text-white justify-content-center">
          <div className="col-md-6 col-12 bg-sky rounded py-3">
            <div className="row">
              <h1 className="text-center">User Detail</h1>
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
                  <h5>Normal</h5>
                </div>
              </div>
              <div className="d-flex justify-content-between py-1">
                <div className="col-md-4">
                  <h5 className="text-end"> Date</h5>
                </div>
                <div className="col-md-6">
                  <h5>20/09/2021</h5>
                </div>
              </div>
              <div className="d-flex justify-content-between py-1">
                <div className="col-md-4">
                  <h5 className="text-end"> Doctor Name</h5>
                </div>
                <div className="col-md-6">
                  <h5> khan</h5>
                </div>
              </div>
              <div className="d-flex justify-content-between py-1">
                <div className="col-md-4">
                  <h5 className="text-end"> Status</h5>
                </div>
                <div className="col-md-6">
                  <h5>Good</h5>
                </div>
              </div>
              <div className="d-flex justify-content-between py-1">
                <div className="col-md-4">
                  <h5 className="text-end">Children</h5>
                </div>
                <div className="col-md-6">
                  <h5>3</h5>
                </div>
              </div>
              <div className="d-flex justify-content-between py-1">
                <div className="col-md-4">
                  <h5 className="text-end"> Fee</h5>
                </div>
                <div className="col-md-6">
                  <h5>3000</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
