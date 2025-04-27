import React from 'react';

const Products = ({ products, isDarkMode }) => {
  return (
    <section id="products" className="products">
      <div className="container">
        <h2>Our Products</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.title} />
              <div className="card-content">
                <h3>{product.title}</h3>
                <ul>
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
