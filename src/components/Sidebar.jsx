import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import { GiArtilleryShell, GiRallyTheTroops } from "react-icons/gi";

export default function SidebarContainer({ setSidebar }) {
  return (
    <div className="sidebar-container">
      <Link to="#" className="menu-close">
        <AiOutlineClose onClick={() => setSidebar(false)} />
      </Link>
      <NavLink to="/" className="nav-link" onClick={() => setSidebar(false)}>
        <span>עמוד הבית</span>
        <AiOutlineHome />
      </NavLink>
      <NavLink
        to="atroop"
        className="nav-link"
        onClick={() => setSidebar(false)}
      >
        <span>סוללה א</span>
        <GiRallyTheTroops />
      </NavLink>
    </div>
  );
}
