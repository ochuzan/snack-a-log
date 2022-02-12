import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-bar">
      <h1>
        <Link to="/snacks">Snacks</Link>
      </h1>
      <button>
        <Link to="/snacks/new">New Snack</Link>
      </button>
    </nav>
  );
}

export default NavBar;
