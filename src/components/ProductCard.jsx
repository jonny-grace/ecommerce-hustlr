import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./ProductCard.css"; // custom CSS file

const ProductCard = ({ product, onAddToCart }) => {
  const isInStock = product?.rating?.count > 0; // stock check
  const variants = ["Small", "Medium", "Large"]; // Placeholder variants

  return (
    <div className="col-md-4 col-sm-6 col-12 mb-4">
      <div className="card product-card h-100 shadow border-0">
        {/* Image */}
        <div className="image-container">
          <img
            src={product.image}
            alt={product.title}
            className="card-img-top p-3"
          />
        </div>

        {/* Content */}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-semibold mb-2">
            {product.title.substring(0, 30)}...
          </h5>
          <p className="price mb-3">${product.price}</p>

          {/* Variant Selector */}
          <div className="variant-select-wrapper mb-3">
            <label htmlFor="variant" className="form-label variant-label">
              Choose Size
            </label>
            <select id="variant" className="form-select variant-select">
              {variants.map((variant) => (
                <option key={variant}>{variant}</option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto d-flex justify-content-between">
            <Link
              to={`/product/${product.id}`}
              className="btn btn-outline-dark rounded-pill px-3"
            >
              View
            </Link>

            {isInStock ? (
              <button
                className="btn btn-dark rounded-pill px-3"
                onClick={() => {
                  toast.success("Added to cart");
                  onAddToCart(product);
                }}
              >
                Add to Cart
              </button>
            ) : (
              <button className="btn btn-secondary rounded-pill px-3" disabled>
                Out of Stock
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;