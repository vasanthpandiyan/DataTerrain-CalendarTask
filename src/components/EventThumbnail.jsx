import { useEffect, useState } from "react";
import "./EventThumbnail.css";
const EventThumbnail = ({ event, view }) => {
  const [eventCount, setEventCount] = useState(0);
  const {user_det, job_id, start, end } = event;
  const jobRole = job_id?.jobRequest_Title;
  const hrName = user_det?.handled_by?.firstName;
  const timeString = `${new Date(start).toLocaleTimeString()} - ${new Date(end).toLocaleTimeString()}`;
  useEffect(() => {
        const multiEvent =
          event?.children && event?.children?.length > 0
            ? event?.children?.length + 1
            : 0;
        setEventCount(multiEvent);
  },[event?.children, start])
  return (
    <div className={`event-thumbnail-container`}>
      {eventCount > 0 && (
        <span className="event-thumbnail-count">{eventCount}</span>
      )}
      <p>{jobRole}</p>
      <p>Interviewer: {hrName}</p>
      <p>{timeString}</p>
      
    </div>
  );
};

export default EventThumbnail;
