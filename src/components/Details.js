import React, { Component } from 'react' 
import img1 from '../img/1.jpg' 


class Details extends Component  {
    render() {
        
    return (
        <div>
            <br />   <br />   <br />  <br />  <br />
    <h2 class="title" style={{fontWeight: 'bold'}}>Titre du projet</h2> 
    <br /> 
    <p class="descript">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

    <div class="projet">
        <div class="projet-img">
            <br/>
          <img src={img1} alt="" />
        </div>

        <div class="projet-stat">
            <br/> <br/> 
 
                <img src={img1} alt="" style={{ width: '60px', height: '60px', borderRadius: '50%'}} />
                <label for=""> <a href="profile_user.html">Utilisateur</a> </label>
                <br/> <br/>

              <table class="stats">

                <tr class="table-title">
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

                <div class="row text-center" >
                    <div class="col-md-10 col-sm-10 progress text-center">
                    </div>
                    <div class="col-md-2">
                        x %
                    </div>
                </div>
            <br/> 
           
          
            <br/>
            <div class="text-center">
              <a href="" class="btn-soutiens text-center">
                Je soutiens
              </a> 
            </div>
            
        </div>

    </div>

    <br/> <br/> 
    
<div class="row">
    <ul class="col-md-12 col-sm-12 col-sm-12 tab text-center">
      <li><a href="javascript:rudrSwitchTab('tb_1', 'content_1');" id="tb_1" class="tabmenu active">Le projet</a></li>
      <li><a href="javascript:rudrSwitchTab('tb_2', 'content_2');" id="tb_2" class="tabmenu">Les commentaires</a></li>
      <li><a href="javascript:rudrSwitchTab('tb_3', 'content_3');" id="tb_3" class="tabmenu">Les contributions</a></li>
    </ul> 
</div> 

<br />

<div class="projet-descrip">

    <div id="content_1" class="tabcontent"> 

        <div class="projet-text">
          <h3 style={{ fontWeight: 'bold' }}>Titre du projet </h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem porro atque consequuntur cumque animi iusto ullam, numquam optio iure, earum nesciunt perferendis eos provident ex incidunt rerum et reiciendis a.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquam sequi sed? Harum, sequi totam! Nihil quia quidem sapiente saepe magnam, numquam optio explicabo odio cumque est asperiores sed dolorum.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta officiis delectus est nobis blanditiis obcaecati commodi amet! Itaque voluptatibus totam ex, repellat dolores vel hic necessitatibus perspiciatis, quisquam, pariatur fugit!
          </p> 
          <br/>
          <h3 style={{ fontWeight: 'bold' }}>A quoi servira la collecte ? </h3>
          <br />
          <h5>Voici comment seront utiliser vos dons : </h5>
          <ul class="utilite">
            <li> <strong>.Pour x Fcfa</strong> utilite 1 </li>
            <li> <strong>.Pour x Fcfa</strong> utilite 2 </li>
            <li> <strong>.Pour x Fcfa</strong> utilite 3 </li>
            <li> <strong>.Pour x Fcfa</strong> utilite 4 </li>
            <li> <strong>.Pour x Fcfa</strong> utilite 5 </li>
          </ul>

        </div>

        <div class="projet-cp">
          
          <h4 style={{ fontWeight: 'bold' }}> Les contres-parties</h4>  
          <div class="card card-default">
            <div class="card-body">
              <h4> Pour x Fcfa </h4>
                <ul class="ul-cp">
                  <li>. contre-partie 1</li>
                  <li>. contre-partie 2</li>
                  <li>. contre-partie 3</li>
                  <li>. contre-partie 4</li>
                </ul> 
                <br />
                <div class="text-center">
                  <a href="" class="btn-soutiens text-center">
                    Je contribue
                  </a> 
                </div>
                <br/>
            </div> 
          </div>
          
          <br />
          <div class="card card-default">
            <div class="card-body">
              <h4> Pour x Fcfa </h4>
                <ul class="ul-cp">
                  <li>. contre-partie 1</li>
                  <li>. contre-partie 2</li>
                  <li>. contre-partie 3</li>
                  <li>. contre-partie 4</li>
                </ul> 
                <br />
                <div class="text-center">
                  <a href="" class="btn-soutiens text-center">
                    Je contribue
                  </a> 
                </div>
                <br/>
            </div> 
          </div>
          <br />
          <div class="card card-default">
            <div class="card-body">
              <h4> Pour x Fcfa </h4>
                <ul class="ul-cp">
                  <li>. contre-partie 1</li>
                  <li>. contre-partie 2</li>
                  <li>. contre-partie 3</li>
                  <li>. contre-partie 4</li>
                </ul> 
                <br />
                <div class="text-center">
                  <a href="" class="btn-soutiens text-center">
                    Je contribue
                  </a> 
                </div>
                <br/>
            </div> 
          </div>
          <br />
          <div class="card card-default">
            <div class="card-body">
              <h4> Pour x Fcfa </h4>
                <ul class="ul-cp">
                  <li>. contre-partie 1</li>
                  <li>. contre-partie 2</li>
                  <li>. contre-partie 3</li>
                  <li>. contre-partie 4</li>
                </ul> 
                <br />
                <div class="text-center">
                  <a href="" class="btn-soutiens text-center">
                    Je contribue
                  </a> 
                </div>
                <br/>
            </div> 
          </div>

        </div>


    </div> 

    <div id="content_2" class="tabcontent col-md-12" style={{display: 'none'}}>
      Les commentaires
    </div> 

    <div id="content_3" class="tabcontent col-md-12" style={{display: 'none'}}>
       Les contributions
    </div>

</div>
    </div>
        )
    }    
}

export default Details; 