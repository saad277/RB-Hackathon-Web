import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // a plugin!
import "./index.scss";
const Fullcalender = () => {
  const handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };

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
