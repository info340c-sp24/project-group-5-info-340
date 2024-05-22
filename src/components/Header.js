import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

function Header() {
    return (
        <html>
            <header>
                <nav className='menu'>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/MedLog">Medicine Log</Link></li>
                        <li><Link to="/Alarm">Alarm</Link></li>
                        <li><Link to="/Profile">Sign In</Link></li>
                    </ul>
                </nav>
            </header>
        </html >
    );
}

export default Header;