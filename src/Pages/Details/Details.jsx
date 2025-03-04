import product from "../../assets/product.png";
import "./Details.css";
import usePanierStore from "../../Zustand/store";

export default function Details() {
  const ajouterAuPanier = usePanierStore((state) => state.ajouterAuPanier);

  const produit = {
    id: 1,
    nom: "AirPods Pro 2",
    description: "Pro-level Active Noise Cancellation",
    prix: 2000,
    image: product,
  };

  return (
    <div className="details">
      <div className="left-details">
        <div className="slider-details">
          <div className="img-details">
            <img src={product} alt="product" />
          </div>
        </div>
      </div>
      <div className="right-details">
        <div className="text">
          <h3>{produit.nom}</h3>
          <p>{produit.description}</p>
        </div>
        <div className="price">
          <span>{produit.prix} DA</span>
        </div>
        <div className="buttons">
          <button onClick={() => ajouterAuPanier(produit)}>Add to cart</button>
          <button>Buy now</button>
        </div>
      </div>
    </div>
  );
}
