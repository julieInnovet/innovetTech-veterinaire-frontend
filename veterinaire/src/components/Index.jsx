import { Outlet } from "react-router-dom";  // Outlet for child components
import { Header } from "./Header";
import Sidebar from "./SideBar";
import "./Index.css";  // Make sure your global styles are correctly imported

function Index() {
  return (
    <div className="layout">
      {/* Sidebar stays fixed */}
      <Sidebar />
      
      <div className="main-content">
        {/* Header stays on top */}
        <Header />
        
        {/* Content renders dynamically based on routes */}
        <div className="content">
          {/* The Outlet dynamically renders content, but layout stays the same */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Index;
