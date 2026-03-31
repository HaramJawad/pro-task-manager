import { Routes, Route } from "react-router-dom"
import './App.css'
import Layout from "./layout/Layout.jsx"
import Dashboard from "./pages/Dashboard"
import Tasks from "./pages/Tasks"
import Important from "./pages/Important"
import Completed from "./pages/Completed"
import Analytics from "./pages/Analytics"
import About from "./pages/About"
import TaskDetail from "./pages/TaskDetail"
import NotFoundPage from "./pages/NotFoundPage"
function App() {

  return (
    <>
      <div className="main-content">
        {/* Routes */}
        <Routes>
          {/* Layout wrapper */}
          <Route path="/" element={<Layout />}>
            {/* Pages rendered inside OUTLET */}
            <Route index element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks/>} />
            <Route path="/important" element={<Important/>} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/analytics" element={<Analytics/>} />
            <Route path="/about" element={<About />} />
            <Route path="tasks/:id" element={<TaskDetail/>} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
