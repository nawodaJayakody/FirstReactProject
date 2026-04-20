import MovieCard from "../components/MovieCard";
function Home() {
  const movies = [
    { id: 1, title: "Superman", release_date: "2026" },
    { id: 2, title: "Batman", release_date: "2025" },
    { id: 3, title: "Sonic", release_date: "2024" },
    { id: 4, title: "Robinhood", release_date: "2023" },
  ];
  const handleSearch = () => {};
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Submit
        </button>
      </form>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
export default Home;
