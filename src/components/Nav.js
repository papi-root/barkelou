import React from 'react';
import { Link } from 'react-router-dom'; 

const Nav = () => {
   
        return (
            <div style={{ width: '100%'}}>
            <nav>
                <div class="burger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div> 
                
                <div class="logo">
                    <h4> <a href="/">Barkelou</a>  </h4>
                </div> 
                
                <ul class="ul1">
                <li><Link to="/lancer"> Lancer votre projet</Link></li>
                <li><a href="/decouverte"> Decouvrez les projets</a></li>
                </ul> 

                <ul class="ul2">
                    <li><a href="#"> Rechercher</a></li>
                    <li><Link to="/auth" class="connecter"> Se connecter / S'inscrire </Link></li>
                </ul>

            </nav> 

                <ul class="burger-menu">
                    <li><a href="#"> Vos questions </a></li>
                    <li><a href="#"> Blog</a></li>
                </ul> 

            </div>
        )
    }


export default Nav; 