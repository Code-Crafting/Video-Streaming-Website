import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { lazy, Suspense, useState } from "react";
import { SearchContext } from "./contexts/SearchContext";
import { HideText } from "./contexts/HideText";
import { useDebounce } from "./hooks/useDebounce";
const Player = lazy(() => import("./pages/Player"));

function App() {
  const [hideAsideText, setHideAsideText] = useState(false);
  const [query, debouncedQuery, setQuery] = useDebounce();
  const [showMenubar, setShowMenubar] = useState(true);

  return (
    <>
      <HideText.Provider value={[hideAsideText, setHideAsideText]}>
        <Navbar query={query} setQuery={setQuery} showMenubar={showMenubar} />
        <SearchContext.Provider
          value={[debouncedQuery, setQuery, setShowMenubar]}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/player/:id/:categoryId"
              element={
                <Suspense>
                  <Player />
                </Suspense>
              }
            />
          </Routes>
        </SearchContext.Provider>
      </HideText.Provider>
    </>
  );
}

export default App;
