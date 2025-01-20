import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-blue-500 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">Task Manager</Link>
            <div>
                <Link to="/tasks" className="mr-4">Tasks</Link>
                <Link to="/feed" className="mr-4">Feed</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    </nav>
);

export default Navbar;
