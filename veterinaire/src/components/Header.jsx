import { Bell, Search, Settings } from "lucide-react";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="search-container">
          <Search size={20} className="search-icon" />
          <input type="text" placeholder="Rechercher..." className="search-input" />
        </div>
      </div>
      
      <div className="header-right">
        <button className="header-icon-button">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>
        <button className="header-icon-button">
          <Settings size={20} />
        </button>
        <div className="header-profile">
          <div className="header-profile-image"></div>
          <div className="header-profile-info">
            <h3>Sarah Smith</h3>
            <p>Administrateur</p>
          </div>
        </div>
      </div>
    </header>
  );
};
