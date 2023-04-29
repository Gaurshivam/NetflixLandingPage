import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
  render() {
    return (
      <div className='Main'>
        <h1 style={{color:"white"}}>Class Component Counter</h1>
        <h2 style={{color:"white"}}>Count : {this.state.count}</h2>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>&nbsp;&nbsp;&nbsp;
        <button onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>&nbsp;&nbsp;&nbsp;
        <button onClick={()=>this.setState({count:0})}>Reset</button>
      </div>
    )
  }
}