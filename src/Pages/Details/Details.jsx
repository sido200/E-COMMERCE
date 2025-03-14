import "./Details.css";
import usePanierStore from "../../Zustand/store";
import { useState, useEffect } from "react";
import { getProductById, purchaseProducts } from "../../services/Products";
import { useParams } from "react-router-dom";

export default function Details() {
  const ajouterAuPanier = usePanierStore((state) => state.ajouterAuPanier);
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // Conditional rendering: Render only if product is defined
  if (!product) {
    return <div>Loading...</div>; // Optional: Show a loading message
    // Alternatively, return null to render nothing: return null;
  }

  return (
    <div className="details">
      <div className="left-details">
        <div className="slider-details">
          <div className="img-details">
            <img src={product.image} alt="product" />
          </div>
        </div>
      </div>
      <div className="right-details">
        <div className="text">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
        <div className="price">
          <span>{product.price} $</span>
        </div>
        <div className="buttons">
          <button onClick={() => ajouterAuPanier(product)}>Add to cart</button>
          <button
            onClick={() => {
              purchaseProducts([product._id]);
            }}
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
