import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import './cardvideo.css'
import { Link } from 'react-router-dom';
const Cardvideo = (props) => {
  const key=props.state.i
  
  return (
    
      <Card className="moviecard" >
        <CardImg  top width="100%" src={props.state.moviepicture} />
        <CardBody class="card-body" >
          <CardTitle class="card-contenu" >{props.state.moviename}</CardTitle>
          <CardSubtitle  ><span class="card-rate">{props.state.moviestar}</span></CardSubtitle>
          
          <Link to="/description"><Button  onClick={()=>props.showDescription(key)} >watch</Button></Link>
          
          <Button onClick={()=>props.deleting(key)}  >X</Button>
          <Button  onClick={()=>props.addFavorite(key)} >+</Button>
        </CardBody>
      </Card>
    
  );
};

export default Cardvideo;