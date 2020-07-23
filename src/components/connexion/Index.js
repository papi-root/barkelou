import React from 'react'; 
import img3 from '../../img/3.jpeg' 

const ConnexionIndex = () => {
    return (
        <div class="row">
            <div class="col-md-6">
                <br/><br/> <br/> <br/>
                <h2 class="text-center" style={{fontWeight: 'bold'}}>Bienvenue</h2> <br/> <br/>
                <form  class="text-center">
                    <label for="">Veuillez saisir votre email pour se connecter ou s'inscrire </label> <br/> <br/>
                    <input class="email_input" type="text" placeholder="exemple:email@email.com" /> <br/> <br/>
                    <br/>
                    <Link to="/barkelou/inscription" class="btn-submit" type="submit" value="Continuer" />
                </form>
            </div>

        <div class="col-md-5">
            <img src={img3} alt=""/>
        </div>
    </div>
    )
}

export default ConnexionIndex; 