import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import Sidebar from "react-sidebar";
import SidebarContainer from "./Sidebar";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar
        sidebar={<SidebarContainer setSidebar={setSidebarOpen} />}
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
      >
        <Header handleSidebar={setSidebarOpen} />
        <Outlet />
      </Sidebar>
    </>
  );
}
