import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Client_Secret = import.meta.env.VITE_CLIENT_SECRET;
const clientID = import.meta.env.VITE_CLIENT_ID;
import { useEffect, useState } from "react";
import EventList from "./components/EventList";
import QueryList from "./components/QueryList";
import VenueChart from "./components/VenueChart";
import EventDetailCard from "./components/EventDetailCard";
import AvgPriceChart from "./components/AvgPriceChart";
import Sidebar from "./components/Sidebar";

function App() {
  const [events, setEvents] = useState(null);
  const [state, setState] = useState("FL");
  const [city, setCity] = useState("Miami");
  const [eventType, setEventType] = useState("Concert");

  console.log(`city ${city}`);

  const fetchEventData = async () => {
    const url = `https://api.seatgeek.com/2/events?venue.state=${state}&venue.city=${city}&type=${eventType}&client_id=${clientID}&client_secret=${Client_Secret}`;
    console.log(`URL: ${url}`);
    try {
      const response = await fetch(url);
      const json = await response.json();
      setEvents(json.events);
    } catch (err) {
      console.error("Error while fetching: ", err);
    }
  };

  useEffect(() => {
    fetchEventData();
  }, [state, city, eventType]);

  const Home = () => {
    return (
      <>
        <div className="app-container">
          <div className="app-wrapper">
            <QueryList
              state={state}
              setState={setState}
              city={city}
              setCity={setCity}
              eventType={eventType}
              setEventType={setEventType}
            />
            <VenueChart events={events} />
            <AvgPriceChart events={events} />
            <EventList events={events} />
          </div>
        </div>
      </>
    );
  };

  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/id/:id" element={<EventDetailCard events={events} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
