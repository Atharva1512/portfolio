import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#">Portfolio.</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link" ><Link to='/'>Home</Link><span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="#my-skills">Skills</a>
                <a className="nav-item nav-link" >
                  <Link to='/projects'>My Projects</Link>
                </a>
                <a className="nav-item nav-link" href="#background">Background</a>
                <a className="nav-item nav-link" href="#info-container">About</a>
                <a className="nav-item nav-link" href="#contact">Contact</a>
            </div>
        </div>
    </nav>

  )
}

export default Navbar