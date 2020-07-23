import React from 'react';

import img1 from '../img/1.jpeg'; 

const Decouverte = () => {

    return (
        <div>
              <div class="container cont1">

<div id="carousel1">

    <div class="item">
        <div class="item_image">
            <img src={img1} alt=""/>
        </div>
        <div class="item_body">
            <p>Type de projet</p>
        </div>
    </div>
    
    <div class="item">
        <div class="item_image">
            <img src={img1} alt=""/>
        </div>
        <div class="item_body">
            <p>Type de projet</p>
        </div>
    </div>

    <div class="item">
        <div class="item_image">
            <img src={img1} alt=""/>
        </div>
        <div class="item_body">
            <p>Type de projet</p>
        </div>
    </div>

    <div class="item">
        <div class="item_image">
            <img src={img1} alt=""/>
        </div>
        <div class="item_body">
            <p>Type de projet</p>
        </div>
    </div>

    <div class="item">
        <div class="item_image">
            <img src={img1} alt=""/>
        </div>
        <div class="item_body">
            <p>Type de projet</p>
        </div>
    </div> 

    <div class="item">
        <div class="item_image">
            <img src={img1} alt=""/>
        </div>
        <div class="item_body">
            <p>Type de projet</p>
        </div>
    </div>
    <div class="item">
        <div class="item_image">
            <img src={img1} alt=""/>
        </div>
        <div class="item_body">
            <p>Type de projet</p>
        </div>
    </div>
    <div class="item">
        <div class="item_image">
            <img src={img1} alt=""/>
        </div>
        <div class="item_body">
            <p>Type de projet</p>
        </div>
    </div>

</div>

</div> 



<h5>x projet(s) </h5>

    <div class="row">

        <div class="col-md-9">
            <div class="row">
            
                <a href="/details" class="item3 col-md-3">
                    <div class="item_image3">
                        <img src={img1} alt=""/>
                    </div>
                    <div class="item_body3">
                        <h4> Titre du projets </h4>
                        <p>Un peu de presentation du projet </p>
                    </div>
                </a>
                
                <a href="#" class="item3 col-md-3">
                    <div class="item_image3">
                        <img src={img1} alt=""/>
                    </div>
                    <div class="item_body3">
                        <h4> Titre du projets </h4>
                        <p>Un peu de presentation du projet </p>
                    </div>
                </a>
                
                <a href="#" class="item3 col-md-3">
                    <div class="item_image3">
                        <img src={img1} alt=""/>
                    </div>
                    <div class="item_body3">
                        <h4> Titre du projets </h4>
                        <p>Un peu de presentation du projet </p>
                    </div>
                </a>

            </div> 

            <div class="row">
            
                <a href="#" class="item3 col-md-3">
                    <div class="item_image3">
                        <img src={img1} alt=""/>
                    </div>
                    <div class="item_body3">
                        <h4> Titre du projets </h4>
                        <p>Un peu de presentation du projet </p>
                    </div>
                </a>
                
                <a href="#" class="item3 col-md-3">
                    <div class="item_image3">
                        <img src={img1} alt=""/>
                    </div>
                    <div class="item_body3">
                        <h4> Titre du projets </h4>
                        <p>Un peu de presentation du projet </p>
                    </div>
                </a>
                
                <a href="#" class="item3 col-md-3">
                    <div class="item_image3">
                        <img src={img1} alt=""/>
                    </div>
                    <div class="item_body3">
                        <h4> Titre du projets </h4>
                        <p>Un peu de presentation du projet </p>
                    </div>
                </a>


            </div>

            <div class="row">
            
                <a href="#" class="item3 col-md-3">
                    <div class="item_image3">
                        <img src={img1} alt=""/>
                    </div>
                    <div class="item_body3">
                        <h4> Titre du projets </h4>
                        <p>Un peu de presentation du projet </p>
                    </div>
                </a>
                
                <a href="#" class="item3 col-md-3">
                    <div class="item_image3">
                        <img src={img1} alt=""/>
                    </div>
                    <div class="item_body3">
                        <h4> Titre du projets </h4>
                        <p>Un peu de presentation du projet </p>
                    </div>
                </a>
                
                <a href="#" class="item3 col-md-3">
                    <div class="item_image3">
                        <img src={img1} alt=""/>
                    </div>
                    <div class="item_body3">
                        <h4> Titre du projets </h4>
                        <p>Un peu de presentation du projet </p>
                    </div>
                </a>

            </div>  
        </div> 

        <div class="col-md-3">
            <p style={{fontWeight: 'bold'}}> Rechercher </p> 
            <form action="">
                <input type="text" class="search_projet" placeholder="Rechercher projet"/>
            </form>
            <br/>
            <p style={{fontWeight: 'bold'}}> Projets</p> 
            <input type="radio" value="populaires"/> <label for="">Plus populaire</label>
            <br/>
            <input type="radio" value="prises"/> <label for="">Notre prise</label>
            <br/>
            <input type="radio" value="projets"/> <label for="">Tous les projets</label>
            <br/>
            
        </div> 
            
    </div> 



</div>
    )
}
export default Decouverte; 