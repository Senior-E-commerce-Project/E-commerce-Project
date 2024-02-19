import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllSellers from './AdminSellers';
import AllBuyers from './AdminClients';
import AllProducts from './AdminProducts';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <Switch>
        <Route path="/admin/all-sellers" element={<AllSellers />} />
        <Route path="/admin/all-buyers" element={<AllBuyers />} />
        <Route path="/admin/all-products" element={<AllProducts />} />
      </Switch>
    </div>
  );
};

export default AdminDashboard;
