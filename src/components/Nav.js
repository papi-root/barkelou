import React from 'react';


const Nav = () => {
   
        return (
            <div>
                 <nav>
    <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div> 
    
    <div class="logo">
        <h4> Barkelou </h4>
    </div> 
    
    <ul class="ul1">
       <li><a href="#"> Lancer votre projet</a></li>
       <li><a href="#"> Decouvrez les projets</a></li>
    </ul> 

    <ul class="ul2">
        <li><a href="#"> Rechercher</a></li>
        <li><a href="#" class="connecter"> Se connecter / S'inscrire </a></li>
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