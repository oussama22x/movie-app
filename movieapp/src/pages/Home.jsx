import MovieCard from "../components/MovieCard";
import { useState } from "react";
import '../css/Home.css';
import { useEffect } from "react";
import {getPopularMovies }from "../servec/api";
import {SearchMovie} from "../servec/api";

function Home(){

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadpupularMovies = async () => {
            try{
                const pupolarMovies = await getPopularMovies();
                
                setMovies(pupolarMovies);
            }
            catch (err){
                setError("Failed to load movies");
                console.error(error);
            }
            finally{
                setLoading(false);
                console.log("Movies loaded");
            }
        }
        loadpupularMovies();
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if(loading) return

        setLoading(true);
        try{
            const searchREsult =  await SearchMovie(searchQuery);
            setMovies(searchREsult);
            setError(null);
        }
        catch(err){
            console.error("Failed to search movies");
            setError(err);
        }
        finally{
            setLoading(false);
        }
        setSearchQuery("");
    }
    return (
        <div className="Home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text"
                    className="search-input"
                    value={searchQuery} 
                    placeholder="Search for a movie..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-button" type="submit">Search</button>
            </form>

            
            {loading ?  (<div className="loading">Loading...</div>) :
            (<div className="movies-list">
                {movies.map((movie) => 
                            <MovieCard key={movie.id} movie={movie } />
                )}
            </div>
            )
            }
        </div>
    );
}

export default Home;