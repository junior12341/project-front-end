import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
    return (  
        <div>
            <Navbar />
          <section className="about">
                <div className="about-content">
                    <div className="about-column">
                        <div className="about-row">
                            <div className="about-content-wrapper">
                                <h1 className="about-heading">
                                    <span className="show-about-heading">Efficiency</span> &nbsp; work smarter
                                </h1>
                                <div className="main-content">
                                    <p className="p-content">
                                    Join us today to improve your business growth by allowing us to assist in project management and promoting team collaboration.
                                    </p>
                                    <div className="button-container">
                                        <span className="sign-up-button">
                                            <Link to="/signup" className="showing-sign">
                                                <span className="signing-now">Sign up now</span>

                                            </Link>

                                        </span>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
          </section>
        </div>
    );
}
 
export default Home;