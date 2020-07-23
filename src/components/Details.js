import React from 'react' 
import img1 from '../img/1.jpeg' 

const Details = () => {
    return (
        <div>


            <br />
    <h2 class="text-center" style={{fontWeight: 'bold'}}>Titre du projet</h2> 
    <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

    <div class="row">
        <div class="col-md-6">
            <br/><br/>
          <img src={img1} alt="" class="col-md-12" style={{marginLeft: '10%'}}/>
        </div>

        <div class="col-md-5">
            <br/> <br/> 
            <div class="col-md-12" style={{marginLeft: '8%'}}>
                <img src={img1} alt="" class="rounded-circle" style={{width:' 15%', height: 'auto'}} />
                <label for="">Utilisateur</label>
                <br/> <br/>
                <table class="table">
                    <tr style={{fontWeight: 'bold'}}>
                        <td>x</td>
                        <td>x jours</td>
                        <td>x FCFA</td>
                    </tr> 
                    <tr>
                        <td>Contributeurs</td>
                        <td>Restants</td>
                        <td>Sur x FCFA</td>
                    </tr>
                </table>

                <div class="row">
                    <div class="col-md-9 progress">
                    </div>
                    <div class="col-md-2">
                        x %
                    </div>
                </div>
            <br/> 
           
            </div>
            <br/>
            <a href="" class="btn-soutiens col-md-12" style={{ marginLeft: '40%', marginRight: '30%' }}>
                Je soutiens
            </a> 
        </div>
    </div>

    <br/> <br/> 


        </div>
    )
} 

export default Details; 