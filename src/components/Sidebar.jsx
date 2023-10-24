import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Event Finder</h1>
      <Link to={"/"}>Dashboard</Link>
      <Link to={"/"}>Search</Link>
    </div>
  );
}
