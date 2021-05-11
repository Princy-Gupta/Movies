import {ADD_MOVIES} from '../actions/index'

const iniState={
    list:[],
    favourites:[]
}

export default function movies( state=iniState, action)
{
    if(action.type===ADD_MOVIES)
    {
        return {
            ...state,
            list:action.movies
        }
    }
    return state
}




