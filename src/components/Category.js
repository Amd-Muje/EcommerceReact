import React from "react";

const Category = ({id , title, onCategoryClick}) => {
  return (
  <div className="border border-black hover:bg-gray-500 gap-2 mb-4 text-center p-5 rounded-2xl transition delay-150" key={id} onClick={() => onCategoryClick(id)}>{title}</div>
  )
};

export default Category;
