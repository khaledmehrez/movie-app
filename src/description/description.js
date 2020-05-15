import React, { Component } from 'react';
import Homecard from"../home/homecard";
import "./description.css"
import Edit from '../movies/edit';
class Description extends Component {
 
    
    render() {
        if(this.props.descriptionarray.length>0){
        return (
            
            <div>
                <h1 class="titledescription">{this.props.descriptionarray[0].moviename}</h1>
                <div className=" movie-container">
                <img className="description-photo" src={this.props.descriptionarray[0].moviepicture} alt="description" />
                <div className="text-movie">
                <p className="des-rate">Description</p>
                 <p>{this.props.descriptionarray[0].description}</p>
                 <p className="des-rate">Rate</p>
                 <p className="description-rate">{this.props.descriptionarray[0].moviestar}</p>
                 </div>
                 </div>
                 
            </div>
        );}
        else{
        return(
            <div></div>
        )}
    }
}

export default Description;