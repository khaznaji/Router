import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';
import Film from "./source/film.jpg";
import Film2 from "./source/film2.jpg";
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  useRouteMatch,
  useParams,
  BrowserRouter,
  Switch
} from 'react-router-dom';
import Description from "./Description"

function App() {

 const objMovies=[
   {id:1,title:"a",describe:"hjbdjbjd",img:Film  ,rate:4,
   link:<iframe width="900" height="506" src="https://www.youtube.com/embed/hEMm7gxBYSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
   {id:2,title:"b",describe:"jndknkd",img:Film2 ,rate:3 ,
   link:<iframe width="900" height="506" src="https://www.youtube.com/embed/hEMm7gxBYSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
   {id:3,title:"c",describe:"jndknkd",img:Film2 ,rate:5 ,
   link:<iframe width="900" height="506" src="https://www.youtube.com/embed/hEMm7gxBYSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>},
   {id:4,title:"d",describe:"jndknkd",img:Film2 ,rate:3 ,
   link:<iframe width="900" height="506" src="https://www.youtube.com/embed/hEMm7gxBYSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>},
   {id:5,title:"c",describe:"jndknkd",img:Film2 ,rate:2 ,
   link:<iframe width="900" height="506" src="https://www.youtube.com/embed/hEMm7gxBYSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>},
   {id:6,title:"d",describe:"jndknkd",img:Film2 ,rate:3 ,
   link:<iframe width="900" height="506" src="https://www.youtube.com/embed/hEMm7gxBYSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}, 
   {id:7,title:"c",describe:"jndknkd",img:Film2 ,rate:1 ,
   link:<iframe width="900" height="506" src="https://www.youtube.com/embed/hEMm7gxBYSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>},
   {id:8,title:"d",describe:"jndknkd",img:Film2 ,rate:3 ,
   link:<iframe width="900" height="506" src="https://www.youtube.com/embed/hEMm7gxBYSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}

 ] ;
 const [filtredFilms, setFiltredFilms] = useState(objMovies)
  
  const handelChange=(item)=>{
      let filter = objMovies.filter((val)=>val.title.toLowerCase().includes(item.toLowerCase()));
      console.log(filter)
      setFiltredFilms(filter)
    }

    const ratingChanged = (newRating) => {
      console.log(newRating)
      let filter = objMovies.filter((val)=> val.rate === newRating);
      console.log(filter)

      setFiltredFilms(filter)      
    };
  return (
    <div className="App">
      <BrowserRouter>
            <Filter changeFn={handelChange} ratingFilter={ratingChanged}/>
<Switch>
  <Route exact path="/">
            <MovieList obj={filtredFilms}/>
            
            
  </Route>
  <Route path="/description/:id" render={(props)=><Description data ={objMovies}{...props}/>}/>
  </Switch>
            </BrowserRouter>
    </div>
  );
}

export default App;
