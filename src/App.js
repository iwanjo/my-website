import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Home from './Home';
import DiscoverKenya from './projects/DiscoverKenya';
import About from './About';
import Foresight from './projects/Foresight';
import Sankofa from './projects/Sankofa';
import Aura from './projects/Aura';
import Seedfund from './projects/Seedfund';
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
      <Route exact path="/discover-kenya" component={DiscoverKenya}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/foresight" component={Foresight}></Route>
      <Route exact path="/sankofa" component={Sankofa}></Route>
      <Route exact path="/aura" component={Aura}></Route>
      <Route exact path="/seedfund" component={Seedfund}></Route>


      </>

    );
  }
}

export default App;

