import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk';

import rootReducer from './reducers'

const store = createStore( rootReducer ,applyMiddleware(thunk, logger))

import {MovieListContainer} from './components/Movies'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
      <MovieListContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
