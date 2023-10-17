/* eslint-disable react/prop-types */
import { useState } from "react";
import "../App.css";

export default function QueryData({ title, query, setQuery }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setQuery(input);
  };

  return (
    <>
      <div className="query-data-wrapper">
        <div className="query-data-container">
          <h1>Current {title}</h1>
          <h3>{query}</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={`Enter ${title}`}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
