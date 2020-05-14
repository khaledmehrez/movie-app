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
                <img src={this.props.descriptionarray[0].moviepicture} alt="Smiley face" height="550" width="80%"/>
                <div className="text-movie">
                <p>Description</p>
                 <p>{this.props.descriptionarray[0].description}</p>
                 <p>Rate</p>
                 <p>{this.props.descriptionarray[0].moviestar}</p>
                 </div>
                 </div>
                 <Edit />
            </div>
        );}
        else{
        return(
            <div></div>
        )}
    }
}

export default Description;