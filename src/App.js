import React, { Component } from 'react'
import Nav from './components/nav'
import Header from './components/header'
import PageTitle from './components/title'
import Logo from './components/logo'
import Slides from './components/slides'
import GetStarted from './components/get-started'
import Footer from './components/footer'

import './animate.css';
import './font-awesome/css/font-awesome.min.css'

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
    this.state = { name: 'Ivy' , level: 1, hp: 100}
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
        <Nav brand='phtn458'/>
        <Header />
        <PageTitle />
        <Logo />
        <Slides />
        <GetStarted label='Get Started!'/>
        {/*<Footer />*/}
      </div>
    );
  }
}

export default App;
