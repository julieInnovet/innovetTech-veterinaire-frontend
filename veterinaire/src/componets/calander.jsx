import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./test.css"
export default function Calendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      weekends={false}
      events={[
        { title: "event 1", date: "2024-12-16", allDay: true },
        { title: "event 1", date: "2024-12-18", allDay: true },
        { title: "event 2", date: "2019-04-02" },
      ]}
    />
  );
}