import "./About.css";

function About() {
  return (
    
      <div className="about-page">
        <div className="about-header">
          <div className="logo-mark">⚡</div>
          <h1>TaskFlow</h1>
          <p className="about-subtext">
            A clean, focused task management app built with React. Designed to help you stay organised, track priorities, and get things done.
          </p>
        </div>

        <div className="about-grid">
          {/* Features Card */}
          <section className="about-card features-card">
            <h3>Features</h3>
            <ul className="features-list">
              <li><span className="icon-box">✓</span> Add, edit & delete tasks</li>
              <li><span className="icon-box">★</span> Mark tasks as important/complete</li>
              <li><span className="icon-box">≡</span> Priority & category management</li>
              <li><span className="icon-box">◎</span> Analytics dashboard</li>
              <li><span className="icon-box">💾</span> LocalStorage persistence</li>
              <li><span className="icon-box">🔍</span> Search & filter tasks</li>
            </ul>
          </section>

          {/* Built With Card */}
          <section className="about-card built-card">
            <h3>Built With</h3>
            <div className="tech-stack">
              <span className="tech-badge">React 18</span>
              <span className="tech-badge">React Router v6</span>
              <span className="tech-badge">React Hooks </span>
              <span className="tech-badge">LocalStorage</span>
              <span className="tech-badge">CSS Variables</span>
              <span className="tech-badge">Vite</span>
              <span className="tech-badge">Flexbox & Grid</span>
            </div>
          </section>
        </div>

        <footer className="about-footer">
          <p>TaskFlow © 2026 · Built by Haram Jawad</p>
        </footer>
      </div>
   
  );
}

export default About;