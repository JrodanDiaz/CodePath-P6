/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Legend,
} from "recharts";

export default function VenueChart({ events }) {
  const [eventData, setEventData] = useState(null);
  //Calculate which venue has the most events

  useEffect(() => {
    if (events) {
      const venueCount = events.reduce((acc, event) => {
        const venue = event.venue.name;
        acc[venue] = (acc[venue] || 0) + 1;
        return acc;
      }, {});

      const data = Object.keys(venueCount).map((venue) => ({
        name: venue,
        events: venueCount[venue],
      }));
      setEventData(data);
    }
  }, [events]);

  return (
    <>
      <div className="venue-chart-container">
        <h1>Most Popular Venues</h1>
        {eventData && (
          <BarChart width={730} height={250} data={eventData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="events" fill="#8884d8" />
          </BarChart>
        )}
      </div>
    </>
  );
}
