import React, { Component } from "react";
import Cardmovie from "./cardmovie";
import "./favorite.css"

//let favorisarr=[JSON.parse(localStorage.getItem("favorite"))]
 
class Favoris extends Component{
    
        
          
       
      
      
    
render(){
    return(
          <body class="body-fav">
           <div className="card-fav">
           
          { this.props.favarr.map((el) => (
            <Cardmovie state={el}  />
          ))}
        </div>
        </body>
    )
}
}


export default Favoris