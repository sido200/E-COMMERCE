import "./Card.css";
import { Link } from "react-router-dom";
export default function Card({ data }) {
  return (
    <div className="card">
      <div className="image">
        <img src={data.image} alt="product" />
        <div className="info-card">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <div className="price-buy">
            <span>{data.price} $</span>
            <Link to={`/Details/${data._id}`}>
              {" "}
              <button>Buy now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
