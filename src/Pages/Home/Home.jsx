import { useState } from "react";
import Card from "../../Components/Card/Card";
import "./Home.css";
import { useEffect } from "react";
import { getProducts } from "../../services/Products";
export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="home">
      <div className="grid-product">
        {products.map((product) => (
          <Card data={product} />
        ))}
      </div>
    </div>
  );
}
