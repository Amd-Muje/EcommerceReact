import React from "react";
import { useParams } from "react-router";
import { getProducts } from "../fetcher";
import CategoryProduct from "./categoryProduct";

const Category = ({id , title, onCategoryClick}) => {
const [products, setProducts] = React.useState({errorMessage: '', data: []});
const {categoryId} = useParams();

React.useEffect(() => {
  const fetchData = async () => {
    const responseObject = await getProducts(categoryId);
    setProducts(responseObject);
  }
  fetchData();
} , [categoryId]);

const renderProducts = () => {
  return products.data.map (p =>
    <CategoryProduct key={p.id} {...p}>{p.title}</CategoryProduct>
  );
}

  return (
    <div>
      {products.errorMessage && <div>Error: {products.errorMessage}</div>}
          <h1 className='font-semibold ml-5 my-10'> products </h1>
          {products && renderProducts()}
    </div>
  )
};

export default Category;
