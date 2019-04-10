import React, { Component } from 'react';
import Movie from './Movie'

class Dashboard extends Component {

renderMovie = movie => {
    return(<Movie {...movie}/>)
}

renderMovies = movies => {
   return(
    //  <div><li>{for(const movieID in this.props.movies){
    //    renderMovie(movies[movieID].name);
    //  }}
    // </li></div>
    <div></div>
   )
}

render (){

  return(
    (this.props.movies[2].id));

}

}


export default Dashboard;
