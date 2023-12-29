import "./App.css";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/SideBar";
import Home from "./Components/Home";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Redirect,
} from "react-router-dom";

function App() {
  const [sidebarState, toggleSidebar] = useState(false);
  const isBackgroundBlurred = sidebarState
    ? "page__sidebar-off"
    : "page__sidebar-on";

  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar sidebarState={sidebarState} toggleSidebar={toggleSidebar} />
        <div className={`page ${isBackgroundBlurred}`}>
          <Header
            className="header"
            sidebarState={sidebarState}
            toggleSidebar={toggleSidebar}
          />
          <main className="content" onClick={() => toggleSidebar(false)}>
            <Routes>
              <Route path="/defaultsite" element={<Navigate to="/home" />} />
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer className="footer" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
