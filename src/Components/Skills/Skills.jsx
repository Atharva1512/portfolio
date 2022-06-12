import React from 'react'
import py_img from "./py.jpg"
import cpp_img from "./cpp.jpg"
import css_img from "./css.jpg"
import django_img from "./django.jpg"
import dsa_img from "./dsa.jpg"
import html_img from "./html.jpg"
import java_img from "./java.jpg"
import sql_img from "./sql.jpg"

const Skills = () => {
    return (
        <>

            <div className="skill-section">
                <div className="titles" id="my-skills">
                    <h2>My Skills</h2>
                </div>
                <div className="skills">
                    <div className="sec1">
                        <p>
                            I know Python,C and C++ programming language. I am building my technical stack in Python. I know
                            Front
                            end web development along with knowledge of Django Framework for backend. I have interest in Data
                            Science and machine learning.
                        </p>
                    </div>
                    <div className="card-deck sec2">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top"
                                src={py_img}
                                alt="Card image cap" />
                            <h5 className="card-title text-center">Python</h5>
                            <div className="card-body">
                                <p className="card-text">
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: "90%",
                                            ariaValuenow:"90", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                                    </div>
                                </p>
                            </div>
                        </div>

                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top"
                                src={java_img}
                                alt="Card image cap" />
                            <h5 className="card-title text-center">JAVA</h5>
                            <div className="card-body">
                                <p className="card-text">
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: "80%"
                                            ,ariaValuenow:"80",ariaValuemin:"0", ariaValuemax:"100"}}></div>
                                    </div>
                                </p>
                            </div>
                        </div>

                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top"
                                src={dsa_img}
                                alt="Card image cap" />
                            <h5 className="card-title text-center">DSA</h5>
                            <div className="card-body">
                                <p className="card-text">
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: "60%",
                                            ariaValuenow:"60", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                                    </div>
                                </p>
                            </div>
                        </div>

                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top"
                                src={cpp_img}
                                alt="Card image cap" />
                            <h5 className="card-title text-center">C++</h5>
                            <div className="card-body">
                                <p className="card-text">
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: "60%",
                                            ariaValuenow:"60", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-deck sec2">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={django_img} alt="Card image cap" />
                            <h5 className="card-title text-center">Django</h5>
                            <div className="card-body">
                                <p className="card-text">
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: "75%",
                                            ariaValuenow:"75", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                                    </div>
                                </p>
                            </div>
                        </div>

                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top"
                                src={html_img}
                                alt="Card image cap" />
                            <h5 className="card-title text-center">HTML</h5>
                            <div className="card-body">
                                <p className="card-text">
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: "70%"
                                            ,ariaValuenow:"80", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                                    </div>
                                </p>
                            </div>
                        </div>

                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top"
                                src={css_img}
                                alt="Card image cap" />
                            <h5 className="card-title text-center">CSS</h5>
                            <div className="card-body">
                                <p className="card-text">
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: "80%",
                                            ariaValuenow:"80", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                                    </div>
                                </p>
                            </div>
                        </div>

                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={sql_img} alt="Card image cap" />
                            <h5 className="card-title text-center">MySQL</h5>
                            <div className="card-body">
                                <p className="card-text">
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: "75%"
                                            ,ariaValuenow:"75", ariaValuemin:"0", ariaValuemax:"100"}}></div>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills