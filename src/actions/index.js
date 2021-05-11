

export const ADD_MOVIES= 'ADD_MOVIES'  //action types

export function addMovies(movies)
{
    return{
        type:ADD_MOVIES,
        movies:movies
      }
}// action creaters