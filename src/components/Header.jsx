import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
  const [isOpen, setIsOpen] = useState(false); // Track menu state

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header>
      <nav>
        <div className="logo-section">
          <div className="logo-container">
            <img src="src/assets/logo.jpeg" alt="TaskFlow" />
          </div>
          <div className="app-name-container">
            <h3>TaskFlow</h3>
            <p>Stay organised</p>
          </div>
          {/* Hamburger Button - Only visible on mobile */}
          <button className="hamburger" onClick={toggleMenu}>
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
        <ul className={`pages-list-ul ${isOpen ? "show" : ""}`}>
          <li><NavLink to="/"><span>▦ </span>  Dashboard</NavLink></li>
          <li><NavLink to="/tasks"><span>☰</span>   Tasks</NavLink></li>
          <li><NavLink to="/important"><span>★</span>   Important</NavLink></li>
          <li><NavLink to="/completed"><span>✓ </span>  Completed</NavLink></li>
          <li><NavLink to="/analytics"><span>◎</span>   Analytics</NavLink></li>
          <li><NavLink to="/about"><span>◈</span>   About</NavLink></li>
        </ul>
        <div className="sidebar-footer">
          <div className="user-card">
            <div className="user-avatar">H</div>
            <div className="user-info">
              <p className="user-name">Haram Jawad</p>
              <p className="user-role">Frontend Dev</p>
            </div>
            <div className="online-dot" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
