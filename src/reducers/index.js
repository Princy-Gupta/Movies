/* eslint-disable default-case */
import {ADD_MOVIES, ADD_FAV} from '../actions/index'

const iniState={
    list:[],
    favourites:[]
}

export default function movies( state=iniState, action)
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
            default:
            return state;            
        
    }

   
}




