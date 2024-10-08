import React from "react";
import Calendar from "./components/Calendar";
import eventsData from "./data/calendarfromtoenddate.json"; //  path to the provided JSON data

function App() {
  return (
    <div className="App">
      <Calendar eventsData={eventsData} />
    </div>
  );
}

export default App;
