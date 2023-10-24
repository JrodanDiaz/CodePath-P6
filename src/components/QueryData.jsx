/* eslint-disable react/prop-types */
import { useState } from "react";
import "../App.css";

export default function QueryData({ title, query, setQuery }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    // e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
    setInput("");
  };

  return (
    <>
      <div className="query-data-wrapper">
        <div className="query-data-container">
          <h1 className="query">Current {title}</h1>
          <h3>{query}</h3>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
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
