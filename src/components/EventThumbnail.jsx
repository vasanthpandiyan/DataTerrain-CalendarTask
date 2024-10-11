import "./EventThumbnail.css";
const EventThumbnail = ({ event, view }) => {
  const {user_det, job_id, start, end } = event;
  const jobRole = job_id?.jobRequest_Title;
  const hrName = user_det?.handled_by?.firstName;
  const timeString = `${new Date(start).toLocaleTimeString()} - ${new Date(end).toLocaleTimeString()}`;
  const multiEvent =
    event?.children && event?.children?.length > 0
      ? event?.children?.length + 1
      : 0;
  return (
    <div className={`event-thumbnail-container`}>
      {multiEvent > 0 && (
        <span className="event-thumbnail-count">{multiEvent}</span>
      )}
      <p>{jobRole}</p>
      <p>Interviewer{hrName}</p>
      <p>{timeString}</p>
      
    </div>
  );
};

export default EventThumbnail;
