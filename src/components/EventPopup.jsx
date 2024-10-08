import React from "react";
import "./EventsPopup.css"; // Import the CSS file for styles

const EventsPopup = ({ event, onClose }) => {
  if (!event) return null;

  const { summary, desc, start, end, score, link, user_det, job_id } = event;
  const { candidate, handled_by } = user_det;

  return (
    <div className="event-popup-overlay" onClick={onClose}>
      {" "}
      {/* Backdrop */}
      <div className="event-popup-content">
        <div className="event-popup-content-title">
          <span>Meetings</span>
          <button onClick={onClose}>X</button>
        </div>{" "}
        {/* Modal Content */}
        <h2>{summary}</h2>
        <p>
          <strong>Description:</strong> {desc}
        </p>
        <p>
          <strong>Start Time:</strong> {new Date(start).toLocaleString()}
        </p>
        <p>
          <strong>End Time:</strong> {new Date(end).toLocaleString()}
        </p>
        <p>
          <strong>Score:</strong> {Object.values(score).join(", ")}
        </p>
        <p>
          <strong>Event Link:</strong>{" "}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </p>
        {/* Candidate Details */}
        <h3>Candidate Details</h3>
        <p>
          <strong>Name:</strong>{" "}
          {`${candidate.candidate_firstName} ${candidate.candidate_lastName}`}
        </p>
        <p>
          <strong>Email:</strong> {candidate.candidate_email}
        </p>
        {event?.children &&
          event?.children.length > 0 &&
          event?.children.map((childEvent) => {
            return (
              <div>
                <p>
                  <strong>Event Name:</strong> {childEvent?.title}
                </p>
                <p>
                  <strong>Start Time:</strong>{" "}
                  {new Date(childEvent?.start).toLocaleString()}
                </p>
                <p>
                  <strong>End Time:</strong>{" "}
                  {new Date(childEvent?.end).toLocaleString()}
                </p>
                <p>
                  <strong>Score:</strong>{" "}
                  {Object.values(childEvent?.score).join(", ")}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default EventsPopup;
