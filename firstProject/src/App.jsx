import "./App.css";
import MovieCard from "./components/MovieCard";
function App() {
  return (
    <>
      <MovieCard movie={{ title: "Nawoda's Film", release_date: "2026" }} />
    </>
  );
}

export default App;
