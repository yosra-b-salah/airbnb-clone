import React, { Component } from 'react';
import './Navbar.css'
import logo from './images/airbnb.png'

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
         <img  src={logo} alt="airbnb-clone"/>
      </nav>
    )
  }
}
