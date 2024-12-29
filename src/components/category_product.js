import React from "react";

const Category_Product = ({title, image, specs, features, price, stock}) => {
    return (
        <article>
            <div>
                {title}
            </div>
            <div>
                <img src={`./assets/${image}`} alt={title}/>
            </div>
            
            <aside>
                <div>
                    <h3>Dimensions</h3>
                    <label>{specs.dimensions}</label>
                </div>

                {specs.capacity &&
                    <div>
                        <h3>Capacity</h3>
                        <label>{specs.capacity}</label>
                    </div>
                }

                <div>
                    <h3>Features</h3>
                    <ul>
                        {features?.map((f) => {
                            return <li>{f}</li>
                        })}
                    </ul>
                </div>
            </aside>

            <aside>
                <div>
                    &pound;{price}
                </div>
                <div>
                    <label>Stock Level: {stock}</label>
                    <label>Free Delivery</label>
                </div>
                <div>
                    <button>View products</button>
                    <button>Add to Basket</button>
                </div>
            </aside>
        </article>
    )
    
};

export default Category_Product;
