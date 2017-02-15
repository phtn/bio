import React, { Component } from 'react';
import Nav from './components/nav'
//import Jumbo from './components/jumbo'
import Slides from './components/slides'
import './animate.css';



class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Nav brand='phtn458' pwd=''/>

        {/*<Jumbo />*/}
        <Slides/>
      </div>
    );
  }
}

export default App;
