import React, { Component } from 'react';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css'

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">s
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">about</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Cart</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">login</a>
      </li>
      </ul>
  </div>
</nav>
            
            
            
            
            
            
            
            
            
            
            
          );
    }
}
 
export default Navbar;


/* <div>
                <div classNameName = 'nav container'></div>
                <div classNameName = 'desktop-nav'>
                    <p classNameName = 'nav-link'>Home</p>
                    <p classNameName = 'nav-link'>About</p>
                    <p classNameName = 'nav-link'>Cart</p>
                    <p classNameName = 'nav-link'>Login</p>
                </div>
            </div> */