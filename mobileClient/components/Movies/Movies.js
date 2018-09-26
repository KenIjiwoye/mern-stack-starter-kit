import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, Image } from 'react-native';

export default class Movies extends Component {
    state={
        movies: []
    }

    componentDidMount() {
        let movies = this.props.getAllMovies();
        
    }
    render() {
        console.log('my movieeee', this.props.movies.movies)
        let movieList = this.props.movies.movies.map( m => {
            let img = m.poster;
            return(
                <View key={m._id} >
                    <Image style={{ width: 250, height: 350}} source={{uri: m.poster}} />
                    <Text>{m.title}</Text>
                </View>
            )
        })
        return (
            <View style={styles.container} >
                <Text>Movies here!</Text>
                <FlatList 
                data={movieList}
                renderItem={({movie}) => (movieList) }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center', 
        justifyContent: 'center', 
    }, 

});