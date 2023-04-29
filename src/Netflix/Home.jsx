import React, { Component } from 'react'
import  './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <h2 style={{color:"white", fontSize:"60px"}}>See What's Next</h2>
        <h2 style={{textTransform:"uppercase",color:"white", fontSize:"30px",marginTop:"-30px"}}>Watch Anywhere. Cancel Anywhere</h2>
        <button className='btnApp'>Watch Free For 30 Days</button>
      </div>
    )
  }
}
