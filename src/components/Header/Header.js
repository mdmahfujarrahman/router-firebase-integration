import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handleSignOut } = useFirebase({});
    console.log(user);
    return (
        <div className="header">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/product">Products</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/register">Register</Link>
                <span>{user?.displayName && user.displayName} </span>
                {
                user?.uid
                 ? 
                <button onClick={handleSignOut}>Sign out</button>
                 : 
                <Link to="/login">Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;