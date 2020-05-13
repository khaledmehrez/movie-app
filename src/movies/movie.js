import React, { Component } from "react";
import "./movie.css";
import star from "./img/star.png";
import hangoverimg from "./img/the-hangover.jpg";
import Cardvideo from "./cardvideo";
import Modall from "./addmovie";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies:this.props.Tab ,
      search: "",
      rate: "",
      addmoviearray: {},
    };
  }
  
 
  
  //add movies

  addtitle = (e) => {
    let newMoviename = e.target.value;
    this.setState(
      Object.assign(this.state.addmoviearray, { moviename: newMoviename })
    );
  };

  addrate = (e) => {
    let newRate = e.target.value;
    this.setState(
      Object.assign(this.state.addmoviearray, { movierate: newRate })
    );
  };
  addstar=(e)=>{
    let newStar = e.target.value;
    this.setState(
      Object.assign(this.state.addmoviearray, { moviestar: newStar })
    );
  }
  addmovieonclick = () => {
    let arrayStorage=this.state.movies.push(this.state.addmoviearray);
    localStorage.setItem('updateMovieArray', arrayStorage)
    this.forceUpdate();
    console.log(this.state.movies);
  };
  //delete item from movie
  deleting = (i) => {
   console.log(this.state.movies[i])
  };
  //create the search variable
  handlechange = (e) => {
    this.setState({ search: e.target.value });
  };
  //create the search by rate variable
  calculaterate1 = () => {
    this.setState({ rate: "1" });
  };
  calculaterate2 = () => {
    this.setState({ rate: "2" });
  };
  calculaterate3 = () => {
    this.setState({ rate: "3" });
  };
  calculaterate4 = () => {
    this.setState({ rate: "4" });
  };
  calculaterate5 = () => {
    this.setState({ rate: "5" });
  };
  reset = () => {
    this.setState({ rate: "" });
  };

  render() {  
    
  
    
    //create the initial body without search
    let initialBody = (
      <body className="movie-body">
        <div className="serch">
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={this.handlechange}
        />
         <div className="RATING-place">
        <img
          src={star}
          alt="Smiley face"
          height="42"
          width="42"
          onMouseOver={this.calculaterate1}
        />

        <img
          src={star}
          alt="Smiley face"
          height="42"
          width="42"
          onMouseOver={this.calculaterate2}
        />
        <img
          src={star}
          alt="Smiley face"
          height="42"
          width="42"
          onMouseOver={this.calculaterate3}
        />
        <img
          src={star}
          alt="Smiley face"
          height="42"
          width="42"
          onMouseOver={this.calculaterate4}
        />
        <img
          src={star}
          alt="Smiley face"
          height="42"
          width="42"
          onMouseOver={this.calculaterate5}
        />
        <button type="button" onClick={this.reset}>
          retun to main page
        </button>
        </div>
        </div>
        <div className="container movie-list">
          {this.state.movies.map((el) => (
            <Cardvideo state={el} deleting={this.deleting} addFavorite={this.props.addFavorite} showDescription={this.props.showDescription} />
          ))}
          <Modall
            addtitle={this.addtitle}
            addrate={this.addrate}
            addstar={this.addstar}
            addmovieonclick={this.addmovieonclick}
          />
        </div>
      </body>
    );
    //create the serch array by name
    let searcharray = this.state.movies.filter((el) =>
      el.moviename.includes(this.state.search)
    );
    //create the seacrh body by name
    let searchbody = (
      <body className="movieSearchbyName-body">
       <div className="serch">
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={this.handlechange}
        />
         <div className="RATING-place">
        <img
          src={star}
          alt="Smiley face"
          height="42"
          width="42"
          onMouseOver={this.calculaterate1}
        />

        <img
          src={star}
          alt="Smiley face"
          height="42"
          width="42"
          onMouseOver={this.calculaterate2}
        />
        <img
          src={star}
          alt="Smiley face"
          height="42"
          width="42"
          onMouseOver={this.calculaterate3}
        />
        <img
          src={star}
          alt="Smiley face"
          height="42"
          width="42"
          onMouseOver={this.calculaterate4}
        />
        <img
          src={star}
          alt="Smiley face"
          height="42"
          width="42"
          onMouseOver={this.calculaterate5}
        />
        <button type="button" onClick={this.reset}>
          retun to main page
        </button>
        </div>
        </div>
        <div className="container movie-list">
          {searcharray.map((el) => (
            <Cardvideo state={el} deleting={this.deleting} addFavorite={this.props.addFavorite}/>
          ))}
        </div>
      </body>
    );
    //create the serch array by rate
    let searchBYratearray = this.state.movies.filter((el) =>
      el.movierate.includes(this.state.rate)
    );
    //add the searchbody by rate
    let searchbodyBYrate = (
      <body className="movieSearchbyRate-body">
        <div className="serch">
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={this.handlechange}
        />
         <div className="RATING-place">
        <img
          src={star}
          alt="Smiley face"
          height="42"
          width="42"
          onMouseOver={this.calculaterate1}
        />

        <img
          src={star}
          alt="Smiley face"
          height="42"
          width="42"
          onMouseOver={this.calculaterate2}
        />
        <img
          src={star}
          alt="Smiley face"
          height="42"
          width="42"
          onMouseOver={this.calculaterate3}
        />
        <img
          src={star}
          alt="Smiley face"
          height="42"
          width="42"
          onMouseOver={this.calculaterate4}
        />
        <img
          src={star}
          alt="Smiley face"
          height="42"
          width="42"
          onMouseOver={this.calculaterate5}
        />
        <button type="button" onClick={this.reset}>
          retun to main page
        </button>
        </div>
        </div>
        <div className="container movie-list">
          {searchBYratearray.map((el) => (
            <Cardvideo state={el} deleting={this.deleting} addFavorite={this.props.addFavorite}/>
          ))}
        </div>
      </body>
    );
    //create the search array by name and rate
    let searchBYrateAndnamearray = searcharray.filter((el) =>
      el.movierate.includes(this.state.rate)
    );
    //add the search body by rate and name
    let searchBodyBYrateAndname = (
      <body className="movieSearchBynameAndRate-body">
      <div className="serch">
      <input
        type="text"
        id="fname"
        name="fname"
        onChange={this.handlechange}
      />
       <div className="RATING-place">
      <img
        src={star}
        alt="Smiley face"
        height="42"
        width="42"
        onMouseOver={this.calculaterate1}
      />

      <img
        src={star}
        alt="Smiley face"
        height="42"
        width="42"
        onMouseOver={this.calculaterate2}
      />
      <img
        src={star}
        alt="Smiley face"
        height="42"
        width="42"
        onMouseOver={this.calculaterate3}
      />
      <img
        src={star}
        alt="Smiley face"
        height="42"
        width="42"
        onMouseOver={this.calculaterate4}
      />
      <img
        src={star}
        alt="Smiley face"
        height="42"
        width="42"
        onMouseOver={this.calculaterate5}
      />
      <button type="button" onClick={this.reset}>
        retun to main page
      </button>
      </div>
      </div>
        
        <div className="container movie-list">
          {searchBYrateAndnamearray.map((el) => (
            <Cardvideo state={el} deleting={this.deleting} addFavorite={this.props.addFavorite} />
          ))}
        </div>
      </body>
    );
    //add the condition for search
    if (this.state.search === "" && this.state.rate === "") {
      return initialBody;
    } else if (this.state.search !== "" && this.state.rate === "") {
      return searchbody;
    } else if (this.state.search === "" && this.state.rate !== "") {
      return searchbodyBYrate;
    } else if (this.state.search !== "" && this.state.rate !== "") {
      return searchBodyBYrateAndname;
    }
  }
}

export default Movie;
