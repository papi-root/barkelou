import React from 'react' 
import './Card.css' 
import { Avatar } from '@material-ui/core'
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'

const Card = ({ photo, finance, titre, resume }) => {

    return  <div className="card">
                <div className="card-img" style={{ height: '25vh', width: '18em'}}>
                    <div style={{ backgroundImage: `url(${photo})`}} className="card_background_img">
                    
                    </div>
                    <Avatar src={img2} className="card_avatar" /> 
                </div> 
                
                <div className="card-descrip">
                    <p>Finance a {finance} %</p>
                    <h3> {titre} </h3>
                    <p> {resume} </p>
                </div>
            </div>
}

export default Card 