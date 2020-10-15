import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {toggle: true}
    this.change = this.change.bind(this)
  }
  change(){
    this.setState({toggle: !this.state.toggle})
  }
  render(){
    return <button id="onOff" onClick={this.change}>{this.state.toggle ? 'on' : 'off'}</button>
  }
}

export default App;
