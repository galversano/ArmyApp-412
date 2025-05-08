import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="main-header">
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
    </header>
  );
}
