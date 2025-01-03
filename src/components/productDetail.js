import React from "react";
import { useParams } from "react-router";
import { getProductById } from "../fetcher";

const ProductDetail = () => {
  const [product, setProduct] = React.useState({ errorMessage: "", data: {} });
  const { productId } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProductById(productId);
      setProduct(responseObject);
    };
    fetchData();
  }, [productId]);

  const createMarkup = () => {
    return { __html: product.data?.description };
  };

  return (
    <article className="ml-5 flex flex-row mb-4 w-fit">
      <div>
        <div className=" bg-cyan-100">{product.data.title}</div>
        <div className=" bg-red-300">
          <img src={`/assets/${product.data.image}`} alt={product.data.title} />
        </div>
      </div>

      <aside className="w-1/3 bg-red-300">
        <div>
          <h3>Dimensions</h3>
          <label>{product.data.specs?.dimensions}</label>
        </div>

        {product.data.specs?.capacity && (
          <div>
            <h3>Capacity</h3>
            <label>{product.data.specs?.capacity}</label>
          </div>
        )}

        <div>
          <h3>Features</h3>
          <ul>
            {product.data.features?.map((f, i) => {
              return <li key={`feature${i}`}>{f}</li>;
            })}
          </ul>
        </div>
      </aside>

      <aside className=" bg-yellow-400">
        <div>&pound;{product.data.price}</div>
        <div>
          <label>Stock Level: {product.data.stock}</label>
          <label>Free Delivery</label>
        </div>
        <div className="flex flex-col gap-2">
          <button className="border border-black hover:bg-slate-50 p-2 rounded-3xl transition delay-1">
            Add to Basket
          </button>
        </div>
      </aside>

      <div dangerouslySetInnerHTML={createMarkup()}></div>
    </article>
  );
};

export default ProductDetail;
