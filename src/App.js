import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Profile from "./pages/Profile";
import Repositories from "./pages/Repositories";
import Followers from "./pages/Followers";
import Home from "./pages/Home";
import { FloatingNav } from "./components/FloatingNav";
function App() {
  const location = useLocation(); // Get the current location

  // Define routes where FloatingNav should appear
  const showFloatingNav = ["/profile", "/repositories", "/followers"].includes(
    location.pathname
  );
  return (
    <section className="flex flex-col w-full h-screen bg-dark-100 overflow-x-hidden ">
      {showFloatingNav && (
        <div className="w-full flex justify-center bg-neutral-800 items-center py-2">
          {" "}
          <FloatingNav />{" "}
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/followers" element={<Followers />} />
      </Routes>
    </section>
  );
}

export default App;
