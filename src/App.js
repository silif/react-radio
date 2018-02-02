import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Radio from './conponents/radio/index'
class App extends Component {
  constructor(props){

    super(props)
    this.state={
      value:2
    }
  }
  onChange(value){
    console.log("value",value)
    this.setState({
      value:value
    })
  }
  render() {
    return (
      <div className="App">
        <Radio
        value="1"
        checked={this.state.value==1}
        onChange={this.onChange.bind(this)}
        >
        选我
        </Radio>
        <Radio
        value="2"
        checked={this.state.value==2}
        onChange={this.onChange.bind(this)}>
          label
        </Radio>
      </div>
    );
  }
}

export default App;
