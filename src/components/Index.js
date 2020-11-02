import React, {Component } from 'react';
import img1 from '../img/1.jpg'; 
import img2 from '../img/2.jpg'; 
import img3 from '../img/3.jpg'; 
import img4 from '../img/4.jpeg'; 
import img5 from '../img/5.jpeg'; 
import "slick-carousel/slick/slick.css"  
import "slick-carousel/slick/slick-theme.css" 
import Slider from 'react-slick'; 
import Card from './Card'; 
import { Avatar } from '@material-ui/core'

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
    } 

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        SlidesToScroll: 2,
        initialSlide: 0, 
        responsive: [
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow:3, 
                    SlidesToScroll: 3,
                    infinite: true, 
                } 
            },
        
            {
                breakpoint: 600,
                settings:{
                    slidesToShow:2, 
                    SlidesToScroll: 2,
                    initialSlide: 2
                } 
            }, 

            {
                breakpoint: 480,
                settings:{
                    slidesToShow:1, 
                    SlidesToScroll: 1
                    
                } 
            }
        ]
    }

    return (
        <div>
            <div className='header'>
            
               <div className="landing-button">
               <h2>Bienvenue dans la plateforme de financement participatif </h2>
                    <button class="button primary">Lancer </button>     <button class="button">Explorer </button>
               </div>
             
            </div>      

            <br /> <br />
            <div className="section1">
               
                <div className="laune">
                    <h2> A la une </h2> <br /> 
                    <div className="card">
                        <div className="card-img" style={{ height: '60vh' }}>
                            <div style={{ backgroundImage: `url(${img2})`,}} className="card_background_img">
                               
                            </div>
                            <Avatar src={img1} style={{  transform: 'scale(1.5)', }} className="card_avatar" /> 
                        </div> 

                        <div className="card-descrip">
                            <p>Finance a 200 %</p>
                            <h3> Titre du projet </h3>
                            <p> Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor </p>
                        </div>
                    </div>
                </div>
                
             
                <div className="selection1">
                    <h2> Notre Selection  </h2> <br /> 
                    <Card 
                        photo={img2}
                        titre="Titre du projet"
                        finance="67"
                        resume="Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor"
                    />
                    <br />
                    <Card 
                        photo={img2}
                        titre="Titre du projet"
                        finance="67"
                        resume="Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor"
                    />
                    <br />
                     <Card 
                        photo={img3}
                        titre="Titre du projet"
                        finance="67"
                        resume="Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor"
                    />
                </div>

            </div> 
            
            <br /> <br /> <br /> 

            <div className="section2">
                <h2> Les projets populaires  </h2>
            <br /> <br />   <br /> <br />  <br /> <br /> 
                <div className="slider">
                    <Slider ref={ c => (this.slider = c )} {...settings}>
                    
                        <div>
                            <h4> 
                                <div className="carousel-img"> 
                                <Card 
                                    photo={img3}
                                    titre="Titre du projet"
                                    finance="67"
                                    resume="Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor"
                                />
                                </div> 
                            </h4>
                            ssad
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div>
                            <h4> 
                                <div className="carousel-img"> 
                                <Card 
                                    photo={img3}
                                    titre="Titre du projet"
                                    finance="67"
                                    resume="Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor"
                                />
                                </div> 
                            </h4>
                            ssad
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div>
                            <h4> 
                                <div className="carousel-img"> 
                                <Card 
                                    photo={img3}
                                    titre="Titre du projet"
                                    finance="67"
                                    resume="Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor"
                                />
                                </div> 
                            </h4>
                            ssad
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <div>
                            <h4> 
                                <div className="carousel-img"> 
                                <Card 
                                    photo={img3}
                                    titre="Titre du projet"
                                    finance="67"
                                    resume="Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor"
                                />
                                </div> 
                            </h4>
                            ssad
                        </div>

                        <div>
                            <h4> 
                                <div className="carousel-img"> 
                                <Card 
                                    photo={img3}
                                    titre="Titre du projet"
                                    finance="67"
                                    resume="Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor"
                                />
                                </div> 
                            </h4>
                            ssad
                        </div>
                        
                               
                
                    </Slider >

                    <div className="carousel-control">
                        <button className="prev" onClick={ this.previous }>  </button>
                        <button className="next" onClick={ this.next }> </button>
                    </div>

                </div> 
                
            </div>
            <br /> <br /> <br /> 
            <br /> <br /> <br /> 
            <div className="section3">

                <div className="img-descrip-barkelou">
                    <img src={img4} alt="" /> 
                </div>

                <div className="descrip-barkelou">
                    <h2> C'est quoi Barkelou ? </h2>
                    <ul>
                        <li>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam sequi, fugiat rem error doloremque culpa dolor
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam sequi, fugiat rem error doloremque culpa dolor
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam sequi, fugiat rem error doloremque culpa dolor
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam sequi, fugiat rem error doloremque culpa dolor
                            
                            </p>
                        </li>
                        <li>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam sequi, fugiat rem error doloremque culpa dolor
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam sequi, fugiat rem error doloremque culpa dolor
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam sequi, fugiat rem error doloremque culpa dolor
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam sequi, fugiat rem error doloremque culpa dolor
                            
                            </p>
                        </li>
                        <li>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam sequi, fugiat rem error doloremque culpa dolor
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam sequi, fugiat rem error doloremque culpa dolor
                            </p>
                        </li>
                    </ul>
                   
                </div>
            </div>
            
        </div>

    )  
        
    }
}

