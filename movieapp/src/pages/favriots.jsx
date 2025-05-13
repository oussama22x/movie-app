
import '../css/Favorites.css';
import { useMovieconext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';
function Favriots() {
  const { favorites } = useMovieconext();

  if(favorites)
  {
    return <div className='favorites'>
      <h2>Your Favorites</h2>
      <div className="movies-list">
                {favorites.map((movie) => 
                            <MovieCard key={movie.id} movie={movie } />
                )}
            </div>
    </div>
  }
  return (
    <div className="favorites-empty">
        <h1>Favorites</h1>
        <p>Your favorites list is empty.</p>
        <p>Go to the home page and add some movies to your favorites!</p>
    </div>
  );
}

export default Favriots;