import React from "react";
import "./EventsPopup.css"; // Import the CSS file for styles

const EventsPopup = ({ event, onClose }) => {
  if (!event) return null;

  const { summary, desc, start, end, score, link, user_det, job_id } = event;
  const { candidate, handled_by } = user_det;

  return (
    <div className="event-popup-overlay">
      {" "}
      {/* Backdrop */}
      <div className="event-popup-content">
        {" "}
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
        {/* Job Details */}
        <h3>Job Details</h3>
        <p>
          <strong>Title:</strong> {job_id.jobRequest_Title}
        </p>
        <p>
          <strong>Role:</strong> {job_id.jobRequest_Role}
        </p>
        <p>
          <strong>Key Skills:</strong> {job_id.jobRequest_KeySkills}
        </p>
        {/* HR Handling the Event */}
        <h3>Handled By</h3>
        <p>
          <strong>HR Name:</strong>{" "}
          {`${handled_by.firstName} ${handled_by.lastName}`}
        </p>
        <p>
          <strong>Email:</strong> {handled_by.userEmail}
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EventsPopup;
