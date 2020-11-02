import React from 'react';
import { Link } from 'react-router-dom'; 
import {FaSearch, FaUser} from 'react-icons/fa'; 


const Nav = () => {
   
        return (
            <div style={{ width: '100%', position: 'fixed', zIndex: '100'}}>
                <nav>
                    <div class="burger">
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div> 
                    
                    <div class="logo">
                        <h4> <Link to="/barkelou">Barkelou</Link>  </h4>
                    </div> 
                    
                    <ul class="ul1">
                    <li><Link to="/barkelou/lancer"> Lancer votre projet</Link></li>
                    <li><Link to="/barkelou/decouverte"> Explorez les projets</Link></li>
                
                    </ul> 

                    <ul class="ul2">
                        <li><a href="#"> <span className="recherche">Rechercher</span>  <FaSearch /> </a></li>
                        <li><Link to="/barkelou/auth" class="connecter"> Se connecter / S'inscrire </Link></li>
                        <li><Link to="/barkelou/auth" class="connecter-icone">  <FaUser />  </Link></li>
                    </ul>

                </nav> 

                <ul class="burger-menu">
                    <li><Link to="/barkelou/lancer"> Lancer votre projet</Link></li>
                    <li><Link to="/barkelou/decouverte"> Explorez les projets</Link></li>
                </ul> 

            </div>
        )
    }


export default Nav; 