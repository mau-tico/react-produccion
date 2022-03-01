import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Ir a Inicio</Link>
        <Link to="/about">Ir a About</Link>
    </nav>
  );
};

//export default Navbar
export {Navbar};