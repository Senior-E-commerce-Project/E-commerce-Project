import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await axios.get('http://localhost:3000/products/getAll');
        setProducts(result.data);
      } catch (error) {
        setError('Error fetching products. Please try again later.');
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">All Products</h2>
{loading && <p className="text-gray-600">Loading products...</p>}
{error && <p className="text-red-500">{error}</p>}
{products.length === 0 && !loading && !error && (
        <p className="text-gray-600">No products found.</p>
      )}
      {products.length > 0 && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <li key={product.idProduct} className="bg-white rounded-md overflow-hidden shadow-md mb-4">
              <Link to={`/products/${product.id}`} className="block">
                <img
                  src={product.imageURL}
                  alt={`Product: ${product.ProductName}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{product.ProductName}</h3>
                  <p className="text-sm text-gray-600">{product.ProductDescription}</p>
                  <p className="text-lg font-bold text-indigo-700 mt-2">${product.ProductPrice}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllProducts;
