import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './index.css';


const Dashboard = () => {

  return (
    <>
    <div className="dashboard">
      <h1>Welcome To Shopping</h1>
      <ul className="nav-menu">
      <li><Link className="nav-link" to="/">Home</Link></li>
        <li><Link className="nav-link" to="/products">Products</Link></li>
        <li><Link className="nav-link" to="/cart">Cart</Link></li>
        <li><Link className="nav-link" to="/about">About</Link></li>
        <li><button className="logout-btn">Logout</button></li>
      </ul>
    </div>
    <Outlet/>
    </>
  );
}

export default Dashboard;
