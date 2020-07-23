import React from 'react' 
import img3 from '../../img/3.jpeg';

const Inscription = () => {
    return (
        <div class="row">

        <div class="col-md-6">
            <br/><br/> <br/> <br/>
            <h2 class="text-center" style={{fontWeight: 'bold'}}>Creation de compte</h2> <br/> <br/>
            <form  class="inscription" action="">
                <label for="">Nom</label> <br/> 
                <input class="input" type="text" /> <br/> <br/>
                <br />
                <label for="">Prenom </label> <br/> 
                <input class="input" type="text" /> <br/> <br/>
                <br/>
                <label for="">Adresse Email</label> <br/>
                <input class="input" type="text"/> <br/> <br/>
                <br/>
                <label for="">Mot de passe</label> <br/> 
                <input class="input" type="text" /> <br/> <br/>
                <br/> 
                <label for="">Confirmer mot de passe</label> <br/> 
                <input class="input" type="text" /> <br/> <br/>
                <br/>
                <div style={{width: '80%'}}>
                    <input type="checkbox" value="confirmation"/> 
                    <label for="">Je declare avoir plus de 16 ans et j'accepte <a href="">les conditions d'utilisations</a> . </label>    
                </div>
                <br/> <br/>
                <input class="btn-submit" type="submit" value="Creer un compte" /> 
            </form> 
            <br /> <br /> 
        </div>

        <div class="col-md-5">
            <img src={ img3 } alt=""/>
        </div>
    </div>

    )
} 

export default Inscription; 