import React, { useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import EventsPopup from "./EventPopup"; 
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css"; // Import your CSS file

// Initialize localizer
const localizer = momentLocalizer(moment);

const Calendar = ({ eventsData }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Mapping the JSON event data to the format required by the calendar
  const events = eventsData.map((event) => ({
    id: event.id,
    title: event.summary,
    start: new Date(event.start),
    end: new Date(event.end),
    desc: event.desc,
    link: event.link,
    score: event.score,
    user_det: event.user_det,
    job_id: event.job_id,
  }));

  // Function to handle event selection and open the popup
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="calendar-container">
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }} // Ensure it uses the full height
        onSelectEvent={handleSelectEvent} // Open popup on event click
      />
      {selectedEvent && (
        <EventsPopup
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default Calendar;
