import { Link } from "react-router-dom";
import "./NavBar.css";
import { LuShoppingCart } from "react-icons/lu";
export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">Quik</div>
      <ul>
        <Link to="/">
          {" "}
          <li>Home</li>
        </Link>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
      <Link to="/panier">
        <span className="cart">
          <LuShoppingCart />
        </span>
      </Link>
    </nav>
  );
}
