import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Pinned } from "./pages/pinned";
import { Archive } from "./pages/Archive";
import { Bin } from "./pages/Bin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pinned" element={<Pinned />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/bin" element={<Bin />} />
      </Routes>
    </>
  );
}

export default App;
