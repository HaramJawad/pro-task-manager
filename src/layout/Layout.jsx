import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "./Layout.css"
function Layout() {
  return (
    <div className="layout-container">
      <Header />

      {/* THIS AREA CHANGES */}
      <main className="page-body">
        <Outlet />
      </main>

      <Footer />
      </div>
  );
}

export default Layout;