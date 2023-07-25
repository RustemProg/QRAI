import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul className='flex justify-center items-center'>
                <li className='ml-12 mr-12'><Link to="/">Main</Link></li>
                <li className><Link to="/qrai">QRAI</Link></li>
                <li className='font-Podkova ml-12'><Link to="/notesgpt">NotesGPT</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar