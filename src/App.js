import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Navigationbar from './navbar/navbar';
import Home from './home/home'
import Movie from './movies/movie';
import { Switch,Route } from 'react-router-dom';
import hangoverimg from "./movies/img/the-hangover.jpg";
import darknight from "./movies/img/darkknight.jpg";
import joker from "./movies/img/joker.jpg";

import Favoris from "./favorite/favorite";
let Tab=[
  {
    moviepicture: darknight,
    moviename: "The Darknight",
    movierate: "5",
    moviestar:"*****",
    description:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    i: 0,
  },
  {
    moviepicture: joker,
    moviename: "joker",
    movierate: "5",
    moviestar:"*****",
    i: 1,
  },
  {
    moviepicture: hangoverimg,
    moviename: "The shawshank redemption",
    movierate: "5",
    moviestar:"*****",
    i: 2,
  },
  {
    moviepicture: hangoverimg,
    moviename: "hangover",
    movierate: "2",
    moviestar:"**",
    i: 3,
  },
  {
    moviepicture: hangoverimg,
    moviename: "hangover",
    movierate: "3",
    moviestar:"***",
    i: 4,
  },
  {
    moviepicture: hangoverimg,
    moviename: "hangover",
    movierate: "4",
    moviestar:"****",
    i: 5,
  },
  {
    moviepicture: hangoverimg,
    moviename: "hangover",
    movierate: "5",
    moviestar:"*****",
    i: 6,
  },
  {
    moviepicture: hangoverimg,
    moviename: "hangover",
    movierate: "2",
    moviestar:"**",
    i: 7,
  },
  {
    moviepicture: hangoverimg,
    moviename: "hangover",
    movierate: "1",
    moviestar:"*",
    i: 8,
  },
  {
    moviepicture: hangoverimg,
    moviename: "hangoveyr",
    movierate: "",
    moviestar:"***",
    i: 9,
  },
  { moviepicture: hangoverimg, moviename: "spa", movierate: "1",moviestar:"*", i: 10 },
  { moviepicture: hangoverimg, moviename: "mohi", movierate: "4",moviestar:"****", i: 10 },
]
let favarr=[]

class App extends Component {
  //add to fvorite
addFavorite=(i)=>{
  favarr.push(Tab[i])
  console.log(favarr)
  
  
  
}

  render(){
  return (
    <div className="App">
      <Navigationbar />
      <Switch>
      <Route path="/Home" exact render={(props) => (<Home  Tab={Tab}/>)} />
      <Route path="/Movie" exact render={(props) => (<Movie  Tab={Tab} addFavorite={this.addFavorite}/>)} />
      <Route path="/favoris" exact render={(props) => (<Favoris  favarr={favarr}/>)} />
      </Switch>
      
    </div>
  );
  }
}

export default App;
