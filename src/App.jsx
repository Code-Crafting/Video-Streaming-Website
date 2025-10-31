import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { lazy, Suspense } from "react";
import { SearchProvider } from "./contexts/SearchContext";
import { ThemeProvider } from "./contexts/Theme";
import Loading from "./ui/Loading";
const Player = lazy(() => import("./pages/Player"));

function App() {
  return (
    <ThemeProvider>
      <SearchProvider>
        <Navbar />
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
      </SearchProvider>
    </ThemeProvider>
  );
}

export default App;
