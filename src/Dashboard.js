import React, { Component } from 'react';
import Movie from './Movie'

class Dashboard extends Component {

render (){
  for (const movie in this.props.movies){
    console.log(this.props.movies[movie].name);
  }
  return(<div></div>);
}

}

export default Dashboard;
