import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";

import { CartContext } from "../contexts/cartContext";

const CategoryProduct = ({
  id,
  title,
  image,
  specs,
  features,
  price,
  stock,
}) => {
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const { addProduct } = cartContext;

  return (
    <article className="ml-5 flex flex-row mb-4 w-fit">
      <div className="w-1/3">
        <div className=" bg-cyan-100">
          <Link to={`/products/${id}`}>{title}</Link>
        </div>
        <div className=" bg-red-300">
          <img src={`/assets/${image}`} alt={title} />
        </div>
      </div>

      <aside className="w-1/3 bg-red-300">
        <div>
          <h3>Dimensions</h3>
          <label>{specs.dimensions}</label>
        </div>

        {specs.capacity && (
          <div>
            <h3>Capacity</h3>
            <label>{specs.capacity}</label>
          </div>
        )}

        <div>
          <h3>Features</h3>
          <ul>
            {features?.map((f, i) => {
              return <li key={`feature${i}`}>{f}</li>;
            })}
          </ul>
        </div>
      </aside>

      <aside className="w-1/3 bg-yellow-400">
        <div>&pound;{price}</div>
        <div>
          <label>Stock Level: {stock}</label>
          <label>Free Delivery</label>
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => navigate(`/products/${id}`)}
            className="border border-black hover:bg-slate-50 p-2 rounded-3xl transition delay-1"
          >
            View products
          </button>
          <button
            onClick={() => addProduct({ id, title, price })}
            className="border border-black hover:bg-slate-50 p-2 rounded-3xl transition delay-1"
          >
            Add to Basket
          </button>
        </div>
      </aside>
    </article>
  );
};

export default CategoryProduct;
