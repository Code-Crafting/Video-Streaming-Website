import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Player from "./pages/Player";
import { useState } from "react";
import { SearchContext } from "./contexts/SearchContext";

function App() {
  // const [query, setQuery] = useState("");
  // const [debouncedQuery, setDebouncedQuery] = useState("");
  return (
    <>
      <Navbar
      // setHideAsideText={setHideAsideText}
      // query={query}
      // setQuery={setQuery}
      // setDebouncedQuery={setDebouncedQuery}
      // isTrue={true}
      />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:id/:categoryId" element={<Player />} />
      </Routes> */}
    </>
  );
}

export default App;
