import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllSellers = () => {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/Users/sellers');
        setSellers(response.data);
      } catch (error) {
        setError('Error fetching sellers. Please try again later.');
        console.error('Error fetching sellers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSellers();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">All Sellers</h2>
      {loading && <p className="text-gray-600">Loading sellers...</p>}
{error && <p className="text-red-500">{error}</p>}
{sellers.length === 0 && !loading && !error && (
        <p className="text-gray-600">No sellers found.</p>
      )}

      {sellers.length > 0 && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sellers.map((seller) => (
            <li key={seller.idUser} className="bg-white rounded-md overflow-hidden shadow-md mb-4">
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{seller.UserName}</h3>
                <p className="text-sm text-gray-600">{seller.UserEmail}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllSellers;
