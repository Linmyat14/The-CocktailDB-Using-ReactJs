import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <div className="website-name">
            <h2>TheCocktail<span className="text-black">DB</span></h2>
        </div>
        <div className="nav-links">
            <ul>
                <li><Link to={"/"} className="nav-item">Home</Link></li>
                <li><Link to={"/about"} className="link" className="nav-item">About</Link></li>
                <li><Link to={"/newsletter"} className="nav-item">Newsletter</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
