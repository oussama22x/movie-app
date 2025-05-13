
import './css/App.css'
import MovieCard from './components/MovieCard';
import Favriots from './pages/favriots';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import { MovieProvider } from './context/MovieContext';

function App() {

  return (
    <MovieProvider>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/liked" element={<Favriots />} />
      </Routes>
      </main>
      </MovieProvider>
  );
}
export default App
