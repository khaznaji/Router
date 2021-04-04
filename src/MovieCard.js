import React from "react";
import {Card,ProgressBar} from "react-bootstrap";
import StarRating from 'react-bootstrap-star-rating';


function MovieCard (props){
    return (
        <div>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.movie.img} />
        <Card.Body>
          <Card.Title>{props.movie.title}</Card.Title>
          <Card.Text>
            {props.movie.describe}
          </Card.Text>
          {props.movie.rate}
          
          <StarRating
        defaultValue={props.movie.rate}
        min={0}
        max={5}
        step={1} />
    );
           </Card.Body>
      </Card>
        </div>
    );
}

export default MovieCard;