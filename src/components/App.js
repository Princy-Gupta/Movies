
import './App.css';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard'
import React from 'react';
import { addMovies, showState } from '../actions';
class App extends React.Component {

componentDidMount(){
  this.props.store.subscribe(()=>{
    this.forceUpdate();
  })
  // api calling
  // dispatch
  //Calling dispatch() "without any conditions" is technically possible, 
  //however it leads to   an infinite loop as every dispatch() call usually triggers the listener again. 
  this.props.store.dispatch(addMovies(data));
}

isfav=(movie)=>{
  const {movies}=this.props.store.getState();
  const idx= movies.favourites.indexOf(movie);
  if(idx!==-1)
  {
       return true;
  }
  return false;
}

changeTab=(val)=>{
  this.props.store.dispatch(showState(val))
}

  render(){
  const {movies} =  this.props.store.getState();
  const {list,favourites,showState}=movies;
  console.log("Render",this.props.store.getState());
  const display=showState?favourites:list
  return (
    <div className="App">
    
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className={`tab ${showState?'':'active-tabs' }`} onClick={()=>this.changeTab(false)}>Movies</div>
          <div className={`tab ${showState?'active-tabs':'' }`} onClick={()=>this.changeTab(true)}>Favourites</div>
        </div>
        <div className="list">
          {display.map((movie,idx) =>(
            <MovieCard movie={movie} key={`movies-${idx}`} dispatch={this.props.store.dispatch} isfav={this.isfav(movie)}/>
          ))}
        </div>
        {display.length===0 ? <h1 className="no-movies">No movies to display!</h1>:null}
      </div>
    </div>
  );
}
}

export default App;
