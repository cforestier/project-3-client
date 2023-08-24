import "./ProductCard.css";
import b4 from "../../b4.webp";
import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-8 min-w-200">
      <figure>
        <Link to="/products?productId">
          <img src={b4} alt="Shoes" />
        </Link>
      </figure>
      <div className="card-body">
        <div className="flex flex-col items-start">
          <h3 className="card-title">
            120$<div className="badge badge-secondary">NEW</div>
          </h3>
          <p>Brand: Nike</p>
          <p>18 months</p>
        </div>
        <div className="card-actions justify-center">
          <div className="badge badge-outline">Category 1</div>
          <div className="badge badge-outline">Category 2</div>
          <p>Sold by: Name</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
