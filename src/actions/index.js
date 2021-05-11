

export const ADD_MOVIES= 'ADD_MOVIES'
export const DEL_FAV='DEL_FAV'
export const ADD_FAV= 'ADD_FAV'  //action types

export function addMovies(movies)
{
    return{
        type:ADD_MOVIES,
        movies:movies
      }
}// action creaters


export function addFav(movie)
{
    return{
        type:ADD_FAV,
        movie:movie
      }
}

export function deleteFav(movie)
{
    return{
        type:DEL_FAV,
        movie:movie
      }
}


