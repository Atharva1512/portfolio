import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import MyProjects from './records.json';
const Projects = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light " id='proj-nav'>
        <a className="navbar-brand" href="#">Portfolio.</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" ><Link to='/'>Home</Link><span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" >
              <Link to='/projects'>My Projects</Link>
            </a>
          </div>
        </div>
      </nav>

      <div className="allProjects">
        {
          MyProjects.map(proj => {
            return (
              <div className="card mb-3">
                <div className="card-img-top">
                  <video src={proj.video} autoPlay ></video>
                </div>
                  <div className="card-body">
                    <h5 className="card-title">{proj.id}. {proj.title}</h5>
                    <h6 className="card-title">Tech stacks used:</h6>
                    <ul className='techTable'>
                      {proj.techStacks.map(tech=>{
                        return(
                        <li className="card-text">{tech}</li>
                        ) 
                      })}
                    </ul>
                    <a href={proj.hostLink} target="_blank"><h6 className='card-title'>Hostlink/GithubLink</h6></a> 
                    <p className="card-text">{proj.Description}</p>

                  </div>
              </div>
            )
          })
        }
      </div>


    </>
  )
}

export default Projects