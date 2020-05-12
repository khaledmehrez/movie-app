import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Navigationbar from './navbar/navbar';
import Home from './home/home'
import Movie from './movies/movie';
import { Switch,Route } from 'react-router-dom';
import hangoverimg from "./movies/img/the-hangover.jpg";
import Favoris from "./favorite/favorite";
let Tab=[
  {
    moviepicture: hangoverimg,
    moviename: "hangover",
    movierate: "1",
    i: 0,
  },
  {
    moviepicture: hangoverimg,
    moviename: "hangover",
    movierate: "1",
    i: 1,
  },
  {
    moviepicture: hangoverimg,
    moviename: "hangover",
    movierate: "5",
    i: 2,
  },
  {
    moviepicture: hangoverimg,
    moviename: "hangover",
    movierate: "2",
    i: 3,
  },
  {
    moviepicture: hangoverimg,
    moviename: "hangover",
    movierate: "3",
    i: 4,
  },
  {
    moviepicture: hangoverimg,
    moviename: "hangover",
    movierate: "4",
    i: 5,
  },
  {
    moviepicture: hangoverimg,
    moviename: "hangover",
    movierate: "5",
    i: 6,
  },
  {
    moviepicture: hangoverimg,
    moviename: "hangover",
    movierate: "2",
    i: 7,
  },
  {
    moviepicture: hangoverimg,
    moviename: "hangover",
    movierate: "5",
    i: 8,
  },
  {
    moviepicture: hangoverimg,
    moviename: "hangoveyr",
    movierate: "5",
    i: 9,
  },
  { moviepicture: hangoverimg, moviename: "spa", movierate: "1", i: 10 },
  { moviepicture: hangoverimg, moviename: "mohi", movierate: "1", i: 10 },
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
      <Route path="/Home" component={Home}/>
      <Route path="/Movie" exact render={(props) => (<Movie  Tab={Tab} addFavorite={this.addFavorite}/>)} />
      <Route path="/favoris" exact render={(props) => (<Favoris  favarr={favarr}/>)} />
      </Switch>
      
    </div>
  );
  }
}

export default App;
