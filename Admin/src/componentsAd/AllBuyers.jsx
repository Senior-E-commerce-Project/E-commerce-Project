import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllBuyers = () => {
  const [buyers, setBuyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBuyers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/Users/buyers');
        setBuyers(response.data);
      } catch (error) {
        setError('Error fetching buyers. Please try again later.');
        console.error('Error fetching buyers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBuyers();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">All Buyers</h2>
{loading && <p className="text-gray-600">Loading buyers...</p>}
{error && <p className="text-red-500">{error}</p>}
{buyers.length === 0 && !loading && !error && (
        <p className="text-gray-600">No buyers found.</p>
      )}

      {buyers.length > 0 && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {buyers.map((buyer) => (
            <li key={buyer.idUser} className="bg-white rounded-md overflow-hidden shadow-md mb-4">
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{buyer.UserName}</h3>
                <p className="text-sm text-gray-600">{buyer.UserEmail}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllBuyers;
