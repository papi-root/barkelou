import React from 'react'; 
import img3 from '../../img/3.jpg' 
import {Link }from 'react-router-dom'; 

const ConnexionIndex = () => {
    return (
        <div class="connexion">
            <div class="connexion-form">
                <br/><br/> <br/> <br/>
                <h1 class="text-center" style={{fontWeight: 'bold'}}>Bienvenue</h1> <br/> <br/>
                <form  class="text-center">
                    <label for="">Veuillez saisir votre email pour se connecter ou s'inscrire </label> <br/> <br/>
                    <input class="email_input" type="text" placeholder="exemple:email@email.com" /> <br/> <br/>
                    <br/>
                    <Link to="/barkelou/inscription" class="btn-submit"  value="Continuer" >Continuer</Link>
                </form>
            </div>

        <div class="connexion-img">
            <img src={img3} alt=""/>
        </div>

    </div>
    )
}

export default ConnexionIndex; 