const APIKEY = import.meta.env.VITE_APIKEY;
const BASEURL = import.meta.env.VITE_BASEURL;


export const getPopularMovies = async () => {
    const respond = await fetch(`${BASEURL}/movie/popular?api_key=${APIKEY}`);
    const data = await respond.json();
    return data.results;
};

export const SearchMovie = async (query) => {
    const respond = await fetch(
        `${BASEURL}/search/movie?api_key=${APIKEY}&query=${encodeURIComponent(query)}`
    );
    const data = await respond.json();
    return data.results;
};