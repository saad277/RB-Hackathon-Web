import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // a plugin!
import { useSelector } from "react-redux";
import axios from "axios";
import { apiUrl } from "../../config";
import "./index.scss";
const Fullcalender = () => {
  const id = useSelector((state) => state.profile);
  const token = useSelector((state) => state.token);
  const handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
  useEffect(() => {
    axios({
      url: `${apiUrl}appointments/${id}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("error occured, status code:", err.response.status);
      });
  }, []);
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      dateClick={handleDateClick}
      events={[
        { title: "event 1", date: "2021-09-01" },
        { title: "event 2", date: "2021-09-02" },
      ]}
    />
  );
};

export default Fullcalender;
