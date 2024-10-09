import "./EventsPopup.css"; // Import the CSS file for styles
import { FiEye } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
const DetailsPopup = ({ event, onClose }) => {
  if (!event) return null;

  const { summary, desc, start, end, score, link, user_det, job_id } = event;
  const { candidate, handled_by } = user_det;
  const jobRole = job_id?.jobRequest_Title;
  const hrName = user_det?.handled_by?.firstName;
  const timeString = `${new Date(start).toLocaleTimeString()} - ${new Date(
    end
  ).toLocaleTimeString()}`;
  const dateString = `${new Date(start).toDateString()}`
  const candidateName = `${candidate?.candidate_firstName} ${candidate?.candidate_lastName}`
  return (
    <div className="event-popup-overlay" >
      {" "}<div className="event-popup-container-overlay"onClick={onClose} />
      {/* Backdrop */}
      <div className="event-popup-content">
        <div className="event-popup-content-title">
          <span>Meetings</span>
        </div>{" "}
        <div className="details-popup-content">
            <div className="left">
                <p>Interview With: {candidateName}</p>
                <p>Position: {jobRole}</p>
                <p>Created By: {hrName}</p>
                <p>Date: {dateString}</p>
                <p>Time: {timeString}</p>
                <div className="btn"><b>Resume.docx</b> <FiEye /><HiDownload /></div>
                <div className="btn"><b>Aadhar card</b><FiEye /><HiDownload /></div>
            </div>
            <div className="right">
                <div className="iconWrapper">
            <svg viewBox="0 0 48 48" width="128" height="128" xmlns="http://www.w3.org/2000/svg"><rect fill="#fff" height="16" transform="rotate(-90 20 24)" width="16" x="12" y="16"></rect><polygon fill="#1e88e5" points="3,17 3,31 8,32 13,31 13,17 8,16"></polygon><path d="M37,24v14c0,1.657-1.343,3-3,3H13l-1-5l1-5h14v-7l5-1L37,24z" fill="#4caf50"></path><path d="M37,10v14H27v-7H13l-1-5l1-5h21C35.657,7,37,8.343,37,10z" fill="#fbc02d"></path><path d="M13,31v10H6c-1.657,0-3-1.343-3-3v-7H13z" fill="#1565c0"></path><polygon fill="#e53935" points="13,7 13,17 3,17"></polygon><polygon fill="#2e7d32" points="38,24 37,32.45 27,24 37,15.55"></polygon><path d="M46,10.11v27.78c0,0.84-0.98,1.31-1.63,0.78L37,32.45v-16.9l7.37-6.22C45.02,8.8,46,9.27,46,10.11z" fill="#4caf50"></path></svg>
            </div>
            <a className="btn" href={link}>Join</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPopup;
