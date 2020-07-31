import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/aniflixlogo.png';
import Button from '../Button';

import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AniFlix Logo" />
            </a>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;