import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllSellers from './AllSellers';
import AllBuyers from './AllBuyers';
import AllProducts from './AllProducts';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto mt-8 p-8 bg-white shadow-lg">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <Switch>
        <Route path="/admin/all-sellers" component={AllSellers} />
        <Route path="/admin/all-buyers" component={AllBuyers} />
        <Route path="/admin/all-products" component={AllProducts} />
      </Switch>
    </div>
  );
};

export default AdminDashboard;
