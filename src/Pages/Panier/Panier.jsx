import { useState } from "react";
import usePanierStore from "../../Zustand/store";
import "./Panier.css";
import { purchaseProducts } from "../../services/Products";

export default function Panier() {
  const { panier, retirerDuPanier, viderPanier } = usePanierStore();
  const total = panier.reduce((sum, item) => sum + item.price, 0);

  const [formData, setFormData] = useState({
    nom: "",
    numero: "",
    expiration: "",
    cvc: "",
    typeCarte: "visa",
  });

  const [isFlipped, setIsFlipped] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    purchaseProducts(panier.map((item) => item._id))
      .then((res) => {
        console.log(res.data);
        viderPanier();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="panier">
      <h2>Votre Panier</h2>
      {panier.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div>
          <ul>
            {panier.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span>{item.price} $</span>
                </div>
                <button onClick={() => retirerDuPanier(item.id)}>❌</button>
              </li>
            ))}
          </ul>
          <h3>Total : {total} $</h3>
          <button onClick={viderPanier}>Vider le panier</button>

          {/* Carte de paiement */}
          <div
            className={`carte ${isFlipped ? "flip" : ""}`}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div className="carte-front">
              <p>{formData.typeCarte.toUpperCase()}</p>
              <p>{formData.numero || "•••• •••• •••• ••••"}</p>
              <p>{formData.nom || "NOM COMPLET"}</p>
              <p>{formData.expiration || "MM/YY"}</p>
            </div>
            <div className="carte-back">
              <p>CVC : {formData.cvc || "***"}</p>
            </div>
          </div>

          {/* Formulaire de paiement */}
          <form className="paiement-form" onSubmit={handleSubmit}>
            <h3>Paiement</h3>
            <select name="typeCarte" onChange={handleChange}>
              <option value="visa">Visa</option>
              <option value="mastercard">MasterCard</option>
            </select>
            <input
              type="text"
              name="nom"
              placeholder="Nom sur la carte"
              onChange={handleChange}
            />
            <input
              type="text"
              name="numero"
              placeholder="Numéro de carte"
              maxLength="16"
              onChange={handleChange}
            />
            <input
              type="text"
              name="expiration"
              placeholder="MM/YY"
              maxLength="5"
              onChange={handleChange}
            />
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              maxLength="3"
              onChange={handleChange}
            />
            <button type="submit">Payer {total} $</button>
          </form>
        </div>
      )}
    </div>
  );
}
