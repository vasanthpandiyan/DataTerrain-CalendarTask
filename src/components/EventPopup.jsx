import React from "react";
import "./EventsPopup.css"; // Import the CSS file for styles

const EventsPopup = ({ event, onClose, onClick }) => {
  if (!event) return null;

  const { summary, desc, start, end, score, link, user_det, job_id } = event;
  const { candidate, handled_by } = user_det;
  const jobRole = job_id?.jobRequest_Title;
  const hrName = user_det?.handled_by?.firstName;
  const timeString = `${new Date(start).toLocaleTimeString()} - ${new Date(
    end
  ).toLocaleTimeString()}`;
  const dateString = `${new Date(start).toLocaleDateString()}`
  return (
    <div className="event-popup-overlay">
      {" "}<div className="event-popup-container-overlay"onClick={onClose} />
      {/* Backdrop */}
      <div className="event-popup-content main">
        <div className="event-popup-container-overlay"onClick={onClose} />
        <div className="event-popup-content-title">
          <span>Meetings</span>
          <button onClick={onClose}>X</button>
        </div>{" "}
        
        {/* Modal Content */}
        <div
          className="event-popup-content-details"
          onClick={() => onClick(event)}
        >
          <h2>{summary}</h2>
          <p className="job">{jobRole}</p>
          <p>Interviewer: {hrName}</p>
          <p>
            Date: {dateString} | Time{timeString}
          </p>
        </div>
        
        {/* <p>
          <strong>Event Link:</strong>{" "}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </p> */}
        {/* Candidate Details */}
        {event?.children &&
          event?.children.length > 0 &&
          event?.children.map((childEvent) => {
            const { summary, desc, start, end, score, link, user_det, job_id } =
              childEvent;
            const jobRole = job_id?.jobRequest_Title;
            const hrName = user_det?.handled_by?.firstName;
            const timeString = `${new Date(
              start
            ).toLocaleTimeString()} - ${new Date(end).toLocaleTimeString()}`;
            const dateString = `${new Date(start).toLocaleDateString()}`;
            return (
              <div
                className="event-popup-content-details"
                onClick={() => onClick(childEvent)}
              >
                <p className="job">{jobRole}</p>
                <p>Interviewer: {hrName}</p>
                <p>
                  Date: {dateString} | Time{timeString}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default EventsPopup;
