import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class Couter extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      count: 0
    };
    this.increase
     = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }
  increase(){
    this.setState(prevStage => ({
      count: prevStage.count + 1
    }));
  }
  decrease(){
    this.setState(prevStage =>({
      count: prevStage.count - 1
    }));
  }
  render(){
    return (
      <div>
        <h1>
          count: {this.state.count}
        </h1>
        <button onClick ={this.increase}>+</button>
        <button onClick ={this.decrease}>-</button>
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2 className="App-intro">
          <Couter/>

        </h2>
        
      </div>
    );
  }
}

export default App;
