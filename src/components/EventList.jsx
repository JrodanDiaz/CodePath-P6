/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "../App.css";
import { Link } from "react-router-dom";

export default function EventList({ events }) {
  return (
    <>
      <div className="EventList-wrapper">
        <input type="text" placeholder="Enter Date" />
        <div className="data-wrapper">
          {events ? (
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Venue</th>
                  <th>Date</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {events.map((event) => (
                  <tr key={event.id}>
                    <td>{event.title}</td>
                    <td>{event.venue.name}</td>
                    <td>{event.datetime_utc.split("T")[0]}</td>
                    <td>
                      <Link to={`/id/${event.id}`}>Link</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Error loading events</p>
          )}
        </div>
      </div>
    </>
  );
}
