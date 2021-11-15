import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "../Profile/Profile.css";

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                              <a href="https://www.linkedin.com/in/iwueze-e-stephen/">
                        <i class="fa fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/deraahhh/">
                        <i className="fa fa-instagram" />
                    </a>
                    <a href="https://web.facebook.com/iwuezee.stephen">
                       <i className="fa fa-facebook-square" />
                    </a>
                    <a href="https://www.linkedin.com/in/iwueze-e-stephen/">
                        <i className="fa fa-twitter" />
                    </a>
                
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <span className="highlighted-text">Stephen</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Dev. 😎",
                                        1000,
                                        "Frontend Dev. 💻",
                                        1000,
                                        "React Dev. 👽",
                                        1000,
                                        "Javascript Dev. 🧠",
                                        1000,
                                        "Pragmatic Dev. 🔴",
                                        1000,
                                    ]}
                                />
                            </h1>
                        </span>
                        <span className="profile-role-tagline">
                            I am a Frontend developer passionate about
                        </span>

                         <span className="profile-role-tagline">
                          building applications with various technologies,
                        </span>
                        

                        <span className="profile-role-tagline">
                           solving problems and
                            automating processes.
                        </span>
                        
                    </div>

                    <div className="profile-options">
                        <button className="btn primary-btn"
                            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        > Hire Me </button>
                        <a href="STEVE!.pdf" download="Stephen pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    );
}
