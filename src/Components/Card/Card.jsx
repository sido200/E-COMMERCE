import "./Card.css";
import product from "../../assets/product.png";
import { Link } from "react-router-dom";
export default function Card() {
  return (
    <div className="card">
      <div className="image">
        <img src={product} alt="product" />
        <div className="info-card">
          <h3>AirPods Pro 2</h3>
          <p>Pro-level Active Noise Cancellation</p>
          <div className="price-buy">
            <span>2000da</span>
            <Link to="/Details/1">
              {" "}
              <button>Buy now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
