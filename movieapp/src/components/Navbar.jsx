import { Link } from "react-router-dom";
import '../css/Navbar.css';
function NavBar(){
    return <nav className="navbar">
        <div className="logo">
            <Link to="/">MovieApp</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/liked" className="nav-link">Favorites</Link>
        </div>
    </nav>
}

export default NavBar;