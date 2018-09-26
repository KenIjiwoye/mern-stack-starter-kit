import { FETCHING_MOVIES, MOVIES_FETCHED, ERROR_FETCHING_MOVIES} from '../actions/movies.action'

const INITIAL_STATE = {
    fetching: false,
    fetched: false,
    error: null,
    movies: []
}

export default ( state=INITIAL_STATE, action ) => {
    switch(action.type){

        case FETCHING_MOVIES:
            return {
                ...state,
                 fetching: true
            }

        case MOVIES_FETCHED:
            return {
                ...state,
                fetching: false,
                fetched: true,
                movies: action.payload
            }

        case ERROR_FETCHING_MOVIES: 
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            }

        default:
            return state
    }
}