import React from 'react';
import img1 from '../img/1.jpeg'; 
import img2 from '../img/2.jpeg'; 
import img3 from '../img/3.jpeg'; 

const Index = () => {
    return (
        <div class="container">

        <div class="title"> Projets en cours </div>
        
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
                    <img src={img2} alt=""/>
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
                    <img src={img2} alt=""/>
                </div>
                <div class="item_body">
                    <p>Type de projet</p>
                </div>
            </div>

        </div> 

        <div class="actu">

<div class="act1">
    <h2>Projets selectionnees</h2>
    <img src={img1} alt=""/>
</div> 

<div class="act1">
    <h2>Notre Selections </h2>
    <div class="itemact2">
        <img src={img1} alt=""/>
    </div> 

    <div class="itemact2">
        <img src={img1} alt=""/>
    </div>

    <div class="itemact2">
        <img src={img1} alt=""/>
    </div>

</div>

</div> 


<div class="container">

    <div class="title"> Projets populaires </div>
    
    <div id="carousel2">

        <div class="item2">
            <div class="item_image2">
                <img src={img2} alt=""/>
            </div>
            <div class="item_body2">
                <h3> Titre du projets </h3>
                <p>Un peu de presentation du projet </p>
            </div>
        </div>
        
        <div class="item2">
            <div class="item_image2">
                <img src={img1} alt=""/>
            </div>
            <div class="item_body2">
                <h3> Titre du projets </h3>
                <p>Un peu de presentation du projet </p>
            </div>
        </div>

        <div class="item2">
            <div class="item_image22">
                <img src={img2} alt=""/>
            </div>
            <div class="item_body2">
                <h3> Titre du projets </h3>
                <p>Un peu de presentation du projet </p>
            </div>
        </div>

        <div class="item2">
            <div class="item_image2">
                <img src={img1} alt=""/>
            </div>
            <div class="item_body2">
                <h3> Titre du projets </h3>
                <p>Un peu de presentation du projet </p>
            </div>
        </div>

        <div class="item2">
            <div class="item_image2">
                <img src={img1} alt=""/>
            </div>
            <div class="item_body2">
                <h3> Titre du projets </h3>
                <p>Un peu de presentation du projet </p>
            </div>
        </div>

    </div>

</div> 


<br></br>

<div class="desc">

    <div class="desc-text">
        <h1>C'est quoi Barkelou ? </h1>

        <ul>
            <li> <h3> .Titre </h3>  
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Eum voluptatibus doloremque pariatur ullam accusamus sed odio tempore 
                    tempora perspiciatis et quisquam dicta, alias omnis, 
                    eveniet sint provident incidunt architecto quaerat. 
                </p>
            </li>
            <li> <h3> .Titre </h3>  
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Eum voluptatibus doloremque pariatur ullam accusamus sed odio tempore 
                    tempora perspiciatis et quisquam dicta, alias omnis, 
                    eveniet sint provident incidunt architecto quaerat. 
                </p>
            </li>
            <li> <h3> .Titre </h3>  
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Eum voluptatibus doloremque pariatur ullam accusamus sed odio tempore 
                    tempora perspiciatis et quisquam dicta, alias omnis, 
                    eveniet sint provident incidunt architecto quaerat. 
                </p>
            </li>

        </ul>
    </div> 

    <div class="desc-img">
        <img src={img1} alt=""/> 
    </div>

</div> 


   

</div>  


    )
}

export default Index; 