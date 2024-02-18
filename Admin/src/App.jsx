
import React from 'react';
import {Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './componentsAd/Navbar';
import AdminDashboard from './componentsAd/AdminDashboard';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Route path="/admin" component={AdminDashboard} />
      </div>
    </Router>
  );
};

export default App;
