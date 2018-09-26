export const FETCHING_MOVIES = 'FETCHING_MOVIES'
export const MOVIES_FETCHED = 'MOVIES_FETCHED'
export const ERROR_FETCHING_MOVIES = 'ERROR_FETCHING_MOVIES'

const movieApi = 'http://192.168.1.165:4000/api/v1/movies'

export const fetchingMovies = () => ({
    type: FETCHING_MOVIES
})

export const moviesFetched = (movies) => ({
    type: MOVIES_FETCHED,
    payload: movies
})

export const errorFetchingMovies = (err) => ({
    type: ERROR_FETCHING_MOVIES,
    payload: err
})

export const getAllMovies = () => {
    return (dispatch) => {
        dispatch(fetchingMovies())
        return fetch(movieApi)
                .then( res => res.json())
                .then( movies => dispatch(moviesFetched(movies)))
                .catch( err => dispatch(errorFetchingMovies(err)))
    }
}