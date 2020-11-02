import React, { Component }  from 'react';
import { Link } from 'react-router-dom'
import img1 from '../img/1.jpg'; 
import img2 from '../img/2.jpg'; 
import img3 from '../img/3.jpg'; 
import img4 from '../img/4.jpeg'; 
import img5 from '../img/5.jpeg'; 
import "slick-carousel/slick/slick.css"  
import "slick-carousel/slick/slick-theme.css" 
import Slider from 'react-slick'; 
import Card from './Card'; 

export default class Decouverte extends Component {  

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

            <div className="slider">
                <Slider ref={ c => (this.slider = c )} {...settings}>
                
                    <div>
                        <h2> <div className="carousel-img"><img src={img1} alt="" /> </div> </h2>
                        ssad
                    </div>

                    
                    <div>
                        <h2> <div className="carousel-img"><img src={img2} alt="" /> </div> </h2>dfdf
                    </div>

                    <div>
                        <h2> <div className="carousel-img"><img src={img3} alt="" /> </div> </h2>
                    </div>  

                    <div>
                        <h2> <div className="carousel-img"><img src={img4} alt="" /> </div> </h2>
                    </div>

                    <div>
                        <h2> <div className="carousel-img"><img src={img5} alt="" /> </div> </h2>
                    </div>        
            
                </Slider >

                <div className="carousel-control">
                    <button className="prev" onClick={ this.previous }>  </button>
                    <button className="next" onClick={ this.next }> </button>
                </div>
          
            </div> 

    <h5>x projet(s) </h5>
        <div className="projets">
            <ul>
                <li>
                    <Link to="/barkelou/details" className="card">
                        <Card 
                            photo={img5}
                            titre="Titre du projet"
                            finance="67"
                            resume="Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor"
                        />
                    </Link> 
                </li>

                <li>
                    <Card 
                        photo={img3}
                        titre="Titre du projet"
                        finance="67"
                        resume="Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor"
                    />
                </li>

                <li>
                    <Card 
                        photo={img4}
                        titre="Titre du projet"
                        finance="67"
                        resume="Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor"
                    />
                </li>

                <li>
                    <Card 
                        photo={img5}
                        titre="Titre du projet"
                        finance="67"
                        resume="Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor"
                    /> 
                </li>

                <li>
                    <Card 
                        photo={img2}
                        titre="Titre du projet"
                        finance="67"
                        resume="Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor"
                    /> 
                </li>

                <li>
                    <Card 
                        photo={img5}
                        titre="Titre du projet"
                        finance="67"
                        resume="Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor"
                    />  
                </li>

                <li>
                    <Card 
                        photo={img4}
                        titre="Titre du projet"
                        finance="67"
                        resume="Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor"
                    /> 
                </li> 

                <li>
                    <Card 
                        photo={img3}
                        titre="Titre du projet"
                        finance="67"
                        resume="Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor"
                    />
                </li>

                <li>
                    <Card 
                        photo={img2}
                        titre="Titre du projet"
                        finance="67"
                        resume="Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor"
                    />
                </li>

                <li>
                    <Card 
                        photo={img1}
                        titre="Titre du projet"
                        finance="67"
                        resume="Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor"
                    /> 
                </li>

                <li>
                    <Card 
                        photo={img5}
                        titre="Titre du projet"
                        finance="67"
                        resume="Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor"
                    /> 
                </li>

                <li>
                    <Card 
                        photo={img4}
                        titre="Titre du projet"
                        finance="67"
                        resume="Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor"
                    />  
                </li>

                <li>
                    <Card 
                        photo={img1}
                        titre="Titre du projet"
                        finance="67"
                        resume="Lorem ipsum dolor sit amet fugiat rem error doloremque culpa dolor"
                    /> 
                </li>
            </ul>
        </div>
</div> 
    )
} 
}
