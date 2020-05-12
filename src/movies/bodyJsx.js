import React, { Component } from "react";
import "./movie.css";
import star from "./img/star.png";


class BodyJsx extends Component{


    render(){
        return(
            
          <div>  
        <input
          type="text"
          id="fname"
          name="fname"
          value={this.props.state.search}
          onChange={this.props.handlechange}
        />
        <img
          src={star}
          alt="Smiley face"
          height="42"
          width="42"
          onMouseOver={this.props.calculaterate1}
        />

        <img
          src={star}
          alt="Smiley face"
          height="42"
          width="42"
          onMouseOver={this.props.calculaterate2}
        />
        <img
          src={star}
          alt="Smiley face"
          height="42"
          width="42"
          onMouseOver={this.props.calculaterate3}
        />
        <img
          src={star}
          alt="Smiley face"
          height="42"
          width="42"
          onMouseOver={this.props.calculaterate4}
        />
        <img
          src={star}
          alt="Smiley face"
          height="42"
          width="42"
          onMouseOver={this.props.calculaterate5}
        />
        <button type="button" onClick={this.props.reset}>
          retun to main page
        </button>
        
        
        </div>  )   
    }
}
export default BodyJsx;
// <BodyJsx handlechange={this.handlechange} calculaterate1={this.calculaterate1} calculaterate2={this.calculaterate2} calculaterate3={this.calculaterate3} calculaterate4={this.calculaterate4} calculaterate5={this.calculaterate5} state={this.state} reset={this.reset} />