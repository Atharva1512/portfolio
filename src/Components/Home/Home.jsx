import React from 'react'
import prof_pic from "./profile_pic.png"
const Home = () => {
    return (
        <>
            <div className="intro">
                <h1>Hello Everyone,</h1><br />
                <h1>I'm <span className='typing-demo'>Atharva Borawake</span> </h1>
                <h1>I'm a <span className='typing-demo'>Web Developer</span> </h1>
            </div>
            <div className="container" id="info-container">
                <div className="info" >
                    <p>Hello, I am Atharva Borawake from India, currently pursuing Bachelors in Electronics and
                        Telecommunication Engineering from Pune Institute of Computer Tchnology, Pune, India. To know more about
                        me click here.</p><br />
                    <a href="resume.pdf" download>
                        <button type="button" className="btn btn-primary">Download CV</button>
                    </a>
                </div><br />
                <div className="prof_img">
                    <img src={prof_pic} alt="Profile Pics" height="200px" width="300px" />
                </div>
            </div><br></br>
        </>
    )
}

export default Home