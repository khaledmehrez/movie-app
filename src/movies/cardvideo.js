import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import './cardvideo.css'
const Cardvideo = (props) => {
  const key=props.state.i
  
  return (
    
      <Card className="moviecard" >
        <CardImg  top width="100%" src={props.state.moviepicture} />
        <CardBody class="card-body" >
          <CardTitle class="card-contenu" >{props.state.moviename}</CardTitle>
          <CardSubtitle >{props.state.movierate}</CardSubtitle>
          
          <Button >watch</Button>
          
          <Button onClick={()=>props.deleting(key)}  >X</Button>
          <Button  onClick={()=>props.addFavorite(key)} >+</Button>
        </CardBody>
      </Card>
    
  );
};

export default Cardvideo;