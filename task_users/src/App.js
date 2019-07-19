import React, { Component } from 'react';
import './App.css';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import WebPage from './components/webpage';

const store = createStore(allReducers);

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
    		<WebPage />
    	</Provider>
    );
  }
}

export default App;
