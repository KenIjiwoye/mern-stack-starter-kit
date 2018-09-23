import { connect } from 'react-redux'
import Movies from './Movies'
import { getAllMovies } from '../../actions/movies.action'

const mapStateToProps = (state) =>({
    movies: state.movies
})

const mapDispatchToProps = (dispatch) => {
    return {
        getAllMovies: () => dispatch(getAllMovies())
    }
}

export const MovieListContainer = connect( mapStateToProps,mapDispatchToProps )(Movies)