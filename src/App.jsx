import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { lazy, Suspense, useState } from "react";
import { SearchContext } from "./contexts/SearchContext";
import { useDebounce } from "./hooks/useDebounce";
import { Theme } from "./contexts/Theme";
import Loading from "./ui/Loading";
const Player = lazy(() => import("./pages/Player"));

function App() {
  const [hideAsideText, setHideAsideText] = useState(false);
  const [query, debouncedQuery, setQuery] = useDebounce();
  const [isDark, setIsDark] = useState(false);

  return (
    <Theme.Provider value={[isDark, setIsDark]}>
      <Navbar query={query} setQuery={setQuery} />
      <SearchContext.Provider value={[debouncedQuery, setQuery]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/player/:id/:categoryId"
            element={
              <Suspense fallback={<Loading />}>
                <Player />
              </Suspense>
            }
          />
        </Routes>
      </SearchContext.Provider>
    </Theme.Provider>
  );
}

export default App;
