import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
<div className="footer-container">
      {/* ── Top section ─────────────────────────────── */}
      <div className="footer-top">

        {/* Brand + description */}
        <div className="footer-brand-col">
          <div className="footer-brand">
            <div className="footer-logo-mark">⚡</div>
            <span className="footer-app-name">TaskFlow</span>
          </div>
          <p className="footer-desc">
            A focused task manager built with React.
            Stay organised, stay productive.
          </p>
        </div>

        {/* Pages links */}
        <div className="footer-col">
          <p className="footer-col-heading">Pages</p>
          <Link to="/"         className="footer-link">Dashboard</Link>
          <Link to="/tasks"     className="footer-link">Tasks</Link>
          <Link to="/important" className="footer-link">Important</Link>
          <Link to="/completed" className="footer-link">Completed</Link>
          <Link to="/analytics" className="footer-link">Analytics</Link>
          <Link to="/about"     className="footer-link">About</Link>
        </div>

        {/* Built with */}
        <div className="footer-col">
          <p className="footer-col-heading">Built with</p>
          <span className="footer-tech">⚛ React 18</span>
          <span className="footer-tech">🔀 React Router v6</span>
          <span className="footer-tech">💾 LocalStorage</span>
          <span className="footer-tech">⚡ Vite</span>
        </div>

      </div>

      {/* ── Bottom bar ───────────────────────────────── */}
      <div className="footer-bottom">
        <p className="footer-copy">© 2026 TaskFlow · Built by Haram Jawad</p>
        <div className="footer-badges">
          <span className="footer-badge">React</span>
          <span className="footer-badge">React Router</span>
          <span className="footer-badge">React Hooks</span>
          <span className="footer-badge">Custom Hooks</span>
          <span className="footer-badge">Vite</span>
          <span className="footer-badge">LocalStorage</span>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;  