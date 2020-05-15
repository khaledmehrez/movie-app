import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import '../movies/cardvideo.css'
import "./homecard.css"

const Homecard = (props) => {
 
  return (
    
      <Card className="moviecard" >
        <CardImg  top width="100%" src={props.state.moviepicture} />
        <CardBody class="card-body" >
          <CardTitle class="card-contenu" >{props.state.moviename}</CardTitle>
          <CardSubtitle ><span class="card-rate">{props.state.moviestar}</span></CardSubtitle>
          
          <Button >watch</Button>
          
          <Button   >X</Button>
          <Button  >+</Button>
        </CardBody>

      </Card>
    
  );
};

export default Homecard;