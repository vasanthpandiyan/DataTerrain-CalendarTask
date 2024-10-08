import "./EventThumbnail.css";
const EventThumbnail = ({ event, view }) => {
  console.log(event, "event");
  const {} = event;
  const multiEvent =
    event?.children && event?.children?.length > 0
      ? event?.children?.length + 1
      : 0;
  return (
    <div className="event-thumbnail-container">
      {multiEvent > 0 && (
        <span className="event-thumbnail-count">{multiEvent}</span>
      )}
      <p>EventThumbnail</p>
    </div>
  );
};

export default EventThumbnail;
