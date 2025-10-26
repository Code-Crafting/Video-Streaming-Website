import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Player from "./pages/Player";
import { useState } from "react";
import { SearchContext } from "./contexts/SearchContext";
import { HideText } from "./contexts/HideText";

function App() {
  const [hideAsideText, setHideAsideText] = useState(false);

  return (
    <>
      <HideText.Provider value={[hideAsideText, setHideAsideText]}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player/:id/:categoryId" element={<Player />} />
        </Routes>
      </HideText.Provider>
    </>
  );
}

export default App;
