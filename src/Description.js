import React from 'react';
import { matchPath } from 'react-router';
export default function Description ({match,data}){
    var movie=data.find(p=>p.id==match.params.id);
    var movieData;
    if (movie)
    movieData=<div>
        <img src={movie.img}/>
        <h3>{movie.title}</h3>
        <p>{movie.describe}</p>
        <hr/>
        <h4>{movie.link}</h4>
    </div>;
    else
    movieData=<h2> Sorry,Movie doesn't exist</h2>;
    return (
        <div><div>
{movieData} </div>
</div>    )

}