import React, { useState } from 'react' 
import img3 from '../../img/3.jpg';
import {useDispatch} from 'react-redux' 
import { register } from '../../actions/user'

const Inscription = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        rePassword: ''
    }); 

    const { nom, prenom, email, password, rePassword } = formData; 
    
    const dispatch = useDispatch() 
    
    const onChange = e => 
        setFormData({ ...formData, [e.target.name]: e.target.value }); 

        const onSubmit = async e => {
            e.preventDefault()
            if(password !== rePassword) {
            
            } 

            dispatch(register(nom, prenom, email, password )) 
        } 

   
    
    return (
        <div class="row">

        <div class="col-md-6">
            <br/><br/> <br/> <br/>
            <h2 class="text-center" style={{fontWeight: 'bold'}}>Creation de compte</h2> <br/> <br/>
            <form  class="inscription" onSubmit={e => onSubmit(e) }>
                <label for="">Nom</label> <br/> 
                <input class="input" type="text" name="nom" value={nom} onChange={e => onChange(e)} /> <br/> <br/>
                <br />
                <label for="">Prenom </label> <br/> 
                <input class="input" type="text" name="prenom" value={prenom} onChange={e => onChange(e)} /> <br/> <br/>
                <br/>
                <label for="">Adresse Email</label> <br/>
                <input class="input" type="text" name="email" value={email} onChange={e => onChange(e)} /> <br/> <br/>
                <br/>
                <label for="">Mot de passe</label> <br/> 
                <input class="input" type="text" name="nom" value={password} onChange={e => onChange(e)}  /> <br/> <br/>
                <br/> 
                <label for="">Confirmer mot de passe</label> <br/> 
                <input class="input" type="text" name="nom" value={rePassword} onChange={e => onChange(e)} /> <br/> <br/>
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