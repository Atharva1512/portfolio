import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="titles text-center" id="background">
        <h2>Background</h2>
    </div>
    <div className="card-deck " id="bg-cards">
        <div className="card text-white bg-primary mb-3" style={{maxWidth: "18rem"}}>
            <div className="card-header">className 10</div>
            <div className="card-body">
                <h5 className="card-title">Balaji Madhyamik Vidyalay,Pune</h5>
                <p className="card-text">91.8 %</p>
            </div>
        </div>
        <div className="card text-white bg-primary mb-3" style={{maxWidth: "18rem"}}>
            <div className="card-header">className 12</div>
            <div className="card-body">
                <h5 className="card-title">NMV Jr.Clg,Pune</h5>
                <p className="card-text">72.92 %</p>
            </div>
        </div>
        <div className="card text-white bg-primary mb-3" style={{maxWidth: "18rem"}}>
            <div className="card-header">B.E. Electrnoics and Telecommunication</div>
            <div className="card-body">
                <h5 className="card-title">Pune Institute of Computer Technology</h5>
                <p className="card-text">9.57 CGPA.</p>
            </div>
        </div>
    </div>

    <div className="jumbotron" id='contact'>
        <h1 className="display-4">Contact ME</h1>
        <p className="lead">I'm available for new opportunities and ready to collaborate for solving real world problems.
        </p>
        <hr className="my-4"/>
        <p>You can reach out me via:</p>
        <p className="lead">
        <div className="card-deck" id="contact-cards">
            <div className="card border-secondary mb-3" id="ph-no" style={{maxWidth: "18rem"}}>
                <div className="card-header">Phone</div>
                <div className="card-body text-secondary">
                    <h5 className="card-title">+91 7057 8177 19</h5>
                </div>
            </div>
            <div className="card border-secondary mb-3" id="mail-id" style={{maxWidth: "18rem"}}>
                <div className="card-header">Email</div>
                <div className="card-body text-secondary">
                    <h5 className="card-title">borawakeatharva2002@gmail.com</h5>
                </div>
            </div>

        </div>
        <div className="social-link">
            <a href="https://www.linkedin.com/in/atharva-borawake-1b34b61ab?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIdf9zmisTs6rzi5Dh9kOXQ%3D%3D"><i class="fa fa-linkedin"></i></a> 

        </div>
        </p>
    </div>
    </>
  )
}

export default Footer