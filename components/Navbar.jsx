import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <ul>
  
  <li><Link to="/">HOME</Link></li>
  <li><Link to="/contact">CONTATO</Link></li>
  <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">CARDAPIO</a>
    <div class="dropdown-content">
    <Link to="/cardapio_carnes">CARNES</Link>
    <Link to="/cardapio_acompanhamentos">ACOMPANHAMENTOS</Link>
    <Link to="/cardapio_sobremesas">SOBREMESAS</Link>
    <Link to="/cardapio_massas">MASSAS</Link>
    </div>
  </li>
  <li><Link to="/empresa">SOBRE NOS</Link></li>
</ul>


  
    )
}

export default Navbar

