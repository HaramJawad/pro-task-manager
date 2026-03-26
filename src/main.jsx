import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TaskProvider } from "./context/TaskContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
      <TaskProvider> {/* for providing data to whole app*/}
    <App />
    </TaskProvider>
    </BrowserRouter>
  </StrictMode>,
)
