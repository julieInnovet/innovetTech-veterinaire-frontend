    import { Bell, Search, Settings, Sun, Moon } from "lucide-react";
    import { useEffect, useState } from "react";
    import "./header.css";

    const Header = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check if user has a theme preference stored
        const theme = localStorage.getItem('theme');
        setIsDark(theme === 'dark');
        if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (isDark) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        }
    };

    return (
        <header className="header">
        <div className="header-left">
            <div className="search-container">
            <Search size={20} className="search-icon" />
            <input type="text" placeholder="Rechercher..." className="search-input" />
            </div>
        </div>
        
        <div className="header-right">
            <button className="header-icon-button" onClick={toggleTheme}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
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

    export default Header;