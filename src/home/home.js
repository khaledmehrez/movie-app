import React, { Component } from 'react';
import './home.css'
import Homecard from './homecard';
import "./home.css"
import Cardvideo from '../movies/cardvideo';
class Home extends Component {
    render() {
         //create the serch array by rate
    let topMovie = this.props.Tab.filter((el) =>
    el.movierate.includes("5")
  );
  console.log(topMovie)
        return (
            <body class="body-home">
              
                <div class="cover">

                </div>
                <h1>Hight rated movies</h1>
            <div className="card-home">
            
           { topMovie.map((el) => (
             <Homecard state={el}  />
           ))}
         </div>
         </body>
        );
    }
}

export default Home;