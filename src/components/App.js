
import './App.css';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard'
import React from 'react';
class App extends React.Component {

componentDidMount(){
  this.props.store.subscribe(()=>{
    this.forceUpdate();
  })
  // api calling
  // dispatch
  this.props.store.dispatch({
    type:'ADD_MOVIES',
    movies:data
  })
}



  render(){
  const movies=this.props.store.getState();
  return (
    <div className="App">
    
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="list">
          {movies.map((movie,idx) =>(
            <MovieCard movie={movie} key={`movies-${idx}`}/>
          ))}
        </div>
      </div>
    </div>
  );
}
}

export default App;
