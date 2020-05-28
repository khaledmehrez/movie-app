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
import disastermovie from "./movies/img/disastermovie.jpg";
import shawshank from "./movies/img/shawshank.jpg"
import transporter from "./movies/img/transporter.jpg"
import godfather from "./movies/img/godfather.jpg"
import shutter from"./movies/img/shutter.jpg"
import fight from"./movies/img/fight.jpg"
import save from"./movies/img/save.jpg"
import Favoris from "./favorite/favorite";
import Description from "./description/description";
import Signup from "./signUp/signUp";
import Signin from "./sign-in/signIn";
import Thank from"./thank/thank";
import Footer from "./footer/footer";
import Loader from "./loader/Loader";
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
    description:"In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    i: 1,
  },
  {
    moviepicture: shawshank,
    moviename: "The shawshank redemption",
    movierate: "5",
    moviestar:"*****",
    description:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    i: 2,
  },
  {
    moviepicture: disastermovie,
    moviename: "disastermovie",
    movierate: "2",
    moviestar:"**",
    description:"Over the course of one evening, an unsuspecting group of twenty-somethings find themselves bombarded by a series of natural disasters and catastrophic events.",
    i: 3,
  },
  {
    moviepicture: transporter,
    moviename: "transpoter",
    movierate: "3",
    moviestar:"***",
    description:"Frank Martin, who transports packages for unknown clients, is asked to move a package that soon begins moving, and complications arise.",
    i: 4,
  },
  {
    moviepicture: hangoverimg,
    moviename: "hangover",
    movierate: "4",
    moviestar:"****",
    description:"Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
    i: 5,
  },
  {
    moviepicture: godfather,
    moviename: "godfather",
    movierate: "5",
    moviestar:"*****",
    description:"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    i: 6,
  },
  {
    moviepicture: save,
    moviename: "save mask",
    movierate: "1",
    moviestar:"*",
    description:"His annual Christmas party faltering thanks to his cynical brother-in-law, former Growing Pains star Kirk Cameron attempts to save the day by showing him that Jesus Christ remains a crucial component of the over-commercialized holiday..",
    i: 7,
  },
  {
    moviepicture: shutter,
    moviename: "Shutter island",
    movierate: "4",
    moviestar:"****",
    description:"In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
    i: 8,
  },
  {
    moviepicture:fight  ,
    moviename: "fight club",
    movierate: "5",
    moviestar:"*****",
    description:"An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    i: 9,
    
  },
  
]
let favarr=[]
let descriptionarray=[]



class App extends Component {
  
    state={load:true}
    
  
  //add to fvorite
addFavorite=(i)=>{
  favarr.push(Tab[i])
  console.log(favarr)
 
  
}
 //show description
 showDescription=(i)=>{
   
  descriptionarray.unshift(Tab[i])
  
  console.log(descriptionarray)
}


componentDidMount=()=>{
  this.stoploader=
    setInterval(()=>{this.setState({load:false})},2500)
    console.log(this.state)
  
}

  render(){
    if (this.state.load){
    return <Loader />}
    else{
     
  return (
    
    <div className="App">
    
    <Navigationbar />
      <Switch>
        
      <Route path="/Home" exact render={(props) => (<Home  Tab={Tab}/>)} />
      <Route path="/Movie" exact render={(props) => (<Movie  Tab={Tab} addFavorite={this.addFavorite} showDescription={this.showDescription} />)} />
      <Route path="/favoris" exact render={(props) => (<Favoris  favarr={favarr}/>)} />
      <Route path="/description" exact render={(props)=>(<Description descriptionarray={descriptionarray} /> )}/>
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      <Route path="/thank" component={Thank} />
      </Switch>
      
    </div>
  );}
    
  }
}

export default App;
