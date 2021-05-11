/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react'
import { addFav,deleteFav } from '../actions';

export default class  extends Component {

    handleClick=()=>{
        const {movie} = this.props;
        this.props.dispatch(addFav(movie));
    }
   
    handleUnClick=()=>{
        const {movie} = this.props;
        this.props.dispatch(deleteFav(movie));
    }


  render() {
      const {movie, isfav}=this.props

    return (
      <div className="movie-card">
        <div className="left">
            <img alt="movie-poster" src={movie.Poster}/>
        </div>
        <div className="right">
            <div className="title">{movie.Title}</div>
            <div className="plot">{movie.Plot}</div>
            <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {
                isfav?
                <button className="unfavourite-btn" onClick={this.handleUnClick}>UnFavourite</button>
                : <button className="favourite-btn" onClick={this.handleClick}>Favourite</button>
            }
           
            </div>

        </div>
      </div>
    )
  }
}
