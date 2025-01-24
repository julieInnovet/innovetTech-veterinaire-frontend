/* eslint-disable react/no-unknown-property */
import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from "@fullcalendar/timegrid"
import dayGridPlugin from "@fullcalendar/daygrid"

export const Calendar=()=> {
  return (
    <div className="calendar-wrapper">
      
      <style jsx>{`
        .calendar-wrapper :global(.fc .fc-view-harness) {
          height: 200px !important;
        }

        .fc .fc-toolbar.fc-header-toolbar {
        padding-inline:10px !important;} 

        .fc-direction-ltr .fc-toolbar > * > :not(:first-child) {
            margin-top:5px !important;
        }

        .fc .fc-button-group {
        gap:5px !important;}

        .calendar-wrapper :global(.fc td), 
        .calendar-wrapper :global(.fc th) {
          padding: 0.1rem !important;
        }
        .calendar-wrapper :global(.fc .fc-daygrid-day-frame) {
          min-height: 40px !important;
          color:red !important;
        }
        .calendar-wrapper :global(.fc .fc-daygrid-day-top) {
          flex-direction: row;
          padding: 2px;
        }
        .calendar-wrapper :global(.fc .fc-daygrid-day-number) {
          font-size: 0.8rem;
        }
        @media (max-width: 768px) {
          .calendar-wrapper :global(.fc-direction-ltr .fc-toolbar > * > :not(:first-child)) {
            margin-left: 0.75em;
            margin-top: 5px;
          }
            .fc-direction-ltr .fc-button-group > .fc-button:not(:first-child) {
            padding:1px;}

            .fc-direction-ltr .fc-button-group > .fc-button:not(:last-child) {
            padding:3px;}
            .fc-direction-ltr .fc-toolbar > * > :not(:first-child) {
              padding:3px;
              margin:0;
            }

           .fc .fc-toolbar.fc-header-toolbar {
              padding-inline:10px;
           }
        }
      `}</style>
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
        className="w-full"
        height={350}
      />
    </div>
  )
}

