/* eslint-disable react/prop-types */
import "../App.css";
import QueryData from "./QueryData";

export default function QueryList({
  state,
  city,
  eventType,
  setState,
  setCity,
  setEventType,
}) {
  return (
    <>
      <div className="querydata-wrapper">
        <div className="querydata-row">
          <QueryData query={state} setQuery={setState} title="State" />
          <QueryData query={city} setQuery={setCity} title="City" />
          <QueryData query={eventType} setQuery={setEventType} title="Type" />
        </div>
      </div>
    </>
  );
}
