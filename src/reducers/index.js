/* eslint-disable default-case */
import {ADD_MOVIES, ADD_FAV,DEL_FAV, SHOW_STATE} from '../actions/index'

const iniState={
    list:[],
    favourites:[],
    showState:false
}

export  function movies( state=iniState, action)
{
    // if(action.type===ADD_MOVIES)
    // {
    //     return {
    //         ...state,
    //         list:action.movies
    //     }
    // }

    switch(action.type)
    {
        case ADD_MOVIES:
            return {
                        ...state,
                        list:action.movies
                    }

        case ADD_FAV:
            return{
                ...state,
                favourites:[action.movie,...state.favourites]
            }

        case DEL_FAV:
            const fil= state.favourites.filter(
                movie=> movie.Title!== action.movie.Title
            );
            return{
                ...state,
                favourites:fil

            }    

        case SHOW_STATE:
            return{
                ...state,
                showState:action.val

            }
            
            

        default:
            return state;            
        
    }

   
}


const iniSearch={
    result:{}
}

export function search(state=iniSearch,action)
{
    return state
}


const iniRoot={
    movies:iniState,
    search:iniSearch
}

export default function root(state=iniRoot, action)
{
    return{
        movies:movies(state.movies,action),
        search:search(state.search,action)
    }
}