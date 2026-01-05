import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">DreamStay</Link>
                <div className="navbar-links">
                    <Link to="/booking">Booking</Link>
                    <Link to="/offers">Offers</Link>
                    <Link to="/support">Support</Link>
                    <Link to="/contact">Contact</Link>
                    {user ? (
                        <div className="user-menu">
                            <span>Hi, {user.firstName}</span>
                            <button onClick={handleLogout} className="btn-logout">Logout</button>
                        </div>
                    ) : (
                        <Link to="/login" className="btn-login-link">Login</Link>
                    )}
                </div>
            </div>
            <style>{`
        .navbar { background: var(--primary-color); padding: 15px 0; color: white; box-shadow: var(--shadow); }
        .navbar-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 20px; }
        .navbar-logo { font-size: 1.5rem; font-weight: bold; color: white; text-decoration: none; }
        .navbar-links { display: flex; gap: 20px; align-items: center; }
        .navbar-links a { color: white; text-decoration: none; font-weight: 500; transition: color 0.3s; }
        .navbar-links a:hover { color: var(--secondary-color); }
        .user-menu { display: flex; gap: 15px; align-items: center; }
        .btn-logout { background: transparent; border: 1px solid white; color: white; padding: 5px 12px; border-radius: 4px; cursor: pointer; }
        .btn-login-link { background: var(--secondary-color); color: var(--primary-color) !important; padding: 8px 16px; border-radius: 4px; }
      `}</style>
        </nav>
    );
};

export default Navbar;
