import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { lazy, Suspense, useState } from "react";
import { SearchContext } from "./contexts/SearchContext";
import { HideText } from "./contexts/HideText";
import { useDebounce } from "./hooks/useDebounce";
import { Theme } from "./contexts/Theme";
const Player = lazy(() => import("./pages/Player"));

function App() {
  const [hideAsideText, setHideAsideText] = useState(false);
  const [query, debouncedQuery, setQuery] = useDebounce();
  const [showMenubar, setShowMenubar] = useState(true);
  const [isDark, setIsDark] = useState(false);

  return (
    <Theme.Provider value={[isDark, setIsDark]}>
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
    </Theme.Provider>
  );
}

export default App;
