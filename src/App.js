import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies';
//import Paginate from './utils/paginate';

class App extends Component {

  constructor(props){
    super(props);
    console.log("App contructor",this.props)
}

  componentDidMount(){
    console.log("App mounted!")
}

componentWillUnmount(){
  console.log("component removed!")
}

  render() {
    console.log("App rendered!");
    //console.log(Paginate())
    return (
      
      <main role="main" className="container">

      <div className="starter-template">
        <Movies/>
        
      </div>
    
    </main>
    );
  }
}

export default App;
