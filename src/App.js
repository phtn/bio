import React, { Component } from 'react'
import Nav from './components/nav'
import Header from './components/header'
import PageTitle from './components/title'
import Logo from './components/logo'
import Slides from './components/slides'
import GetStarted from './components/get-started'
import Intro from './components/intro'
import CreatePanel from './components/create'
/*import Footer from './components/footer'*/

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
    this.state = { showLogo: true}
  }

  componentDidMount() {
    console.log('firebase init')
    const rootRef = firebase.database().ref('samp');
    rootRef.on('value', snap => {
      this.setState({
        name: snap.val()
      })
    })
  }
  componentWillUnmount() {
    this.setState({showLogo: false})
    console.log('componentWillUnmount()')
  }
  displayLogo(){
    if(this.state.showLogo){
      return( <Logo showLogo={this.state.showLogo}/> )
    }
  }
  toggleLogo(){
    return this.state.showLogo ? false : false
  }
  render() {

    return (
      <div className="App">
        <Nav brand='phtn458'/>
        <Header />
        <PageTitle />
        {this.displayLogo()}
        <Slides />

        <GetStarted label='Get Started!' showLogo={this.state.showLogo}/>
        
        <Intro />
        <CreatePanel />

        {/*<Footer />*/}
      </div>
    );
  }
}

export default App;
