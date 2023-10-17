/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "../App.css";

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
                </tr>
              </thead>
              <tbody className="table-body">
                {events.map((event) => (
                  <tr>
                    <td>{event.title}</td>
                    <td>{event.venue.name}</td>
                    <td>{event.datetime_utc.split("T")[0]}</td>
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
