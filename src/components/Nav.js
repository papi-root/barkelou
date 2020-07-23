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
                    <h4> <Link href="/barkelou">Barkelou</Link>  </h4>
                </div> 
                
                <ul class="ul1">
                <li><Link to="/barkelou/lancer"> Lancer votre projet</Link></li>
                <li><Link href="/barkelou/decouverte"> Decouvrez les projets</Link></li>
                </ul> 

                <ul class="ul2">
                    <li><a href="#"> Rechercher</a></li>
                    <li><Link to="/barkelou/auth" class="connecter"> Se connecter / S'inscrire </Link></li>
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