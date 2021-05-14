import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Home from './Home';
import DiscoverKenya from './projects/DiscoverKenya';
import About from './About';
import { Route } from 'react-router-dom';



class App extends React.Component {

  // fake authentication Promise
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }

  render() {
    return (
      <>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/Discover-Kenya" component={DiscoverKenya}></Route>
      <Route exact path="/About" component={About}></Route>
      </>

    );
  }
}

export default App;

