import React from "react";
import MovieCard from "./MovieCard";
import {Link} from"react-router-dom";
import { Movie } from "@material-ui/icons";

function MovieList (props){
    return (
        props.obj.map((item, index)=><Link to={`/Description/${item.id}`}><MovieCard movie={item} key={index}/></Link>)
      
    );
    }
export default MovieList;