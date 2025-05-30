import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/products')
      .then(response => {
        if (Array.isArray(response.data.products)) {
          setProducts(response.data.products);
          setFiltered(response.data.products);
        } else {
          console.error('Products is not an array:', response.data.products);
        }
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      {Array.isArray(filtered) ? (
        filtered.map(product => (
          <div key={product._id}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default Home;