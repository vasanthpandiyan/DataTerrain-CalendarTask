import React from "react";
import moment from "moment";
import "./CustomToolbar.css";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

const CustomToolbar = ({ date, onNavigate, view, onView, label }) => {
  const currentYear = new Date(date).getFullYear();
  const currentMonth = new Date(date).getMonth();

  const handleNext = () => {
    onNavigate("NEXT");
  };

  const handlePrev = () => {
    onNavigate("PREV");
  };

  const handleToday = () => {
    onNavigate("TODAY");
  };

  const handleYearChange = (event) => {
    const year = event.target.value;
    const newDate = new Date(date);
    newDate.setFullYear(year);
    onNavigate("date", newDate);
  };

  const handleMonthChange = (event) => {
    const month = event.target.value;
    const newDate = new Date(date);
    newDate.setMonth(month);
    onNavigate("date", newDate);
  };

  const years = [];
  for (let i = 2000; i <= 2030; i++) {
    years.push(i);
  }

  const months = moment.months();

  return (
    <div className="rbc-custom-toolbar">
      <div className="rbc-custom-toolbar-top">
        <h2 className="title">Your Todos</h2>
        {/* Year and Month Dropdowns */}
        <div className="rbc-custom-toolbar-select">
          <select value={currentMonth} onChange={handleMonthChange}>
            {months.map((month, index) => (
              <option key={month} value={index}>
                {month}
              </option>
            ))}
          </select>
          <select value={currentYear} onChange={handleYearChange}>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="rbc-custom-toolbar-bottom">
        <div className="rbc-btn-navigation-group">
          <button type="button" onClick={handlePrev}>
            <MdArrowBackIosNew />
          </button>
          <button type="button" onClick={handleNext}>
            <MdArrowForwardIos />
          </button>
        </div>
        {/* Default Label for Current Date Range */}
        <div className="rbc-custom-toolbar-label">
          {label}{" "}
          {/* This shows the current date or date range based on the view */}
        </div>

        {/* View Buttons */}
        <div className="rbc-btn-custom-group">
          <button
            type="button"
            onClick={() => onView("month")}
            className={view === "month" ? "active" : ""}
            style={{
              padding: "10px",
              backgroundColor: view === "month" ? "#3498db" : "",
              color: "white",
            }}
          >
            Month
          </button>
          <button
            type="button"
            onClick={() => onView("week")}
            className={view === "week" ? "active" : ""}
            style={{
              padding: "10px",
              backgroundColor: view === "week" ? "#3498db" : "",
              color: "white",
            }}
          >
            Week
          </button>
          <button
            type="button"
            onClick={() => onView("day")}
            className={view === "day" ? "active" : ""}
            style={{
              padding: "10px",
              backgroundColor: view === "day" ? "#3498db" : "",
              color: "white",
            }}
          >
            Day
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default CustomToolbar;
