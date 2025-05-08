import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";

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
        to="about"
        className="nav-link"
        onClick={() => setSidebar(false)}
      >
        <span>סוללה א</span>
        <AiOutlineHome />
      </NavLink>
    </div>
  );
}
