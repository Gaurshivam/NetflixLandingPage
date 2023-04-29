import React, { Component } from 'react'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <div className='Nav'>
        <div className='NavLeft'>
            <h1 style={{color:"red"}}>Netflix</h1>
        </div>
        <div className='NavRight'>
            <button className='btn'>SignUp</button>
        </div>
      </div>
    )
  }
}
