import React, { Component } from 'react';
import Nav from './components/nav'
//import Jumbo from './components/jumbo'
import Slides from './components/slides'
import './animate.css';

import * as firebase from 'firebase'


 let config = {
  apiKey: "AIzaSyAmP8DMo4zq8HXROwfyxmEVjvmdKY3rWsE",
  authDomain: "swordfish-e3643.firebaseapp.com",
  databaseURL: "https://swordfish-e3643.firebaseio.com",
  storageBucket: "swordfish-e3643.appspot.com",
  messagingSenderId: "1006429554309"
};

firebase.initializeApp(config);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Ivy' , level: 1}
  }

  componentDidMount() {
    console.log('componentDidMount()')
    const rootRef = firebase.database().ref('samp');
    rootRef.on('value', snap => {
      this.setState({
        name: snap.val()
      })
    })
  }
  
  render() {

    return (
      <div className="App">
        <Nav brand='phtn458' pwd={ this.state.name }/>

        {/*<Jumbo />*/}
        <Slides/>
      </div>
    );
  }
}

export default App;
