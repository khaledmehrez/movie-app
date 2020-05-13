import React, { Component } from 'react';
import Homecard from"../home/homecard";

class Description extends Component {
   
    render() {
        if(this.props.descriptionarray.length>0){
        return (
            
            <div>
                <img src={this.props.descriptionarray[0].moviepicture} alt="Smiley face" height="550" width="80%"/>
                 
            </div>
        );}
        else{
        return(
            <div></div>
        )}
    }
}

export default Description;