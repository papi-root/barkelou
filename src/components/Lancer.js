import React from 'react';
import img2 from '../img/2.jpeg'; 

const Lancer = () => {

    return (
        <div>
        <div class="lancer-landing">
            <div class="lancer-title">
                <h2 class="text-center" style={{fontWeight: 'bold'}}>Ce projet vous y croyez ? Nous aussi !</h2>
                <p class="container-fluid">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam sequi, fugiat rem error doloremque culpa dolor </p>
                <a href="" className="btn btn-lancer" style={{marginLeft: '35%'}}>
                    Je lance mon projet
                </a> 
                <br/> <br/>
            </div>
        </div>

    <div class="container"> 
        <div class="row" style={{margin: '10% 5% 10% 5%'}}>
            <div class="col-md-5">
                <h2 style={{fontWeight: 'bold'}}> Des coachs pour votre campagne </h2>
                <ul  style={{marginBottom: '10%'}}>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga ad quas aliquam suscipit voluptatem error corrupti praesent</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellendus molestias sapiente natus repudiandae veritatis debitis dolorem autem laboriosam, esse expedita minima</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laboriosam, asperiores dignissimos dolore similique cum tenetur, aperiam eo</li>
                </ul> 

                <a href="" class="btn-lancer">
                    Je lance mon projet
                </a>
            </div> 

            <div class="col-md-7">
                <img src={img2} alt="" class="col-md-12" style={{marginTop: '80px'}}/>
            </div>
        </div>


        <div class="row" style={{margin: '10% 5% 10% 5%'}}>

            <div class="col-md-5">
                <h2 style={{fontSize: '40px', fontWeight: 'bold'}}> Quelles etapes pour lancer ma campagne ?</h2>
                <br/> <br/>
                <a class="btn-lancer" href="">Je lance mon projet</a>
            </div> 

            <div class="col-md-7">
                <ul class="timeline">
                    <li>Je fixe le montant que je souhaite collecter et la durée que j'estime nécessaire pour l'atteindre (60 jours maximum).</li>
                    <li>Je complète la page de présentation de mon projet.</li>
                    <li>Je reçois des conseils sur-mesure pour booster ma collecte et mes chances de réussite.</li>
                    <li>Quand je suis prêt·e, je lance ma collecte et mobilise mes communautés autour du projet.</li>
                </ul>
            </div>
        </div>
    </div>
         
        </div>
    )
}

export default Lancer; 