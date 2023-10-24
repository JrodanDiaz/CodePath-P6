import { useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function EventDetailCard({ events }) {
  let eventID = useParams();
  console.log(`EventID.id: ${eventID.id}`);
  let event;
  if (events) {
    event = events.find((event) => event.id == eventID.id);
  }

  const EventDetails = () => {
    return (
      <>
        <div className="event-detail-card">
          <div className="event-detail-txt-wrapper">
            <h1>Date: {event.datetime_utc}</h1>
            <h1>Event Type: {event.type}</h1>
            {event.performers[0].genres?.[0]?.name && (
              <h1>Genre: {event.performers[0].genres?.[0].name}</h1>
            )}
            <h1>Venue: {event.venue.name}</h1>
            <h1>Address: {event.venue.address}</h1>
          </div>
        </div>
      </>
    );
  };

  {
    event.performers?.[0]?.genres?.[0]?.name && (
      <h1>Genre: {event.performers[0].genres[0].name}</h1>
    );
  }

  return <>{event && <EventDetails />}</>;
}
